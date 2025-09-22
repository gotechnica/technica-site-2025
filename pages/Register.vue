<template>
  <title>Register</title>
  <div id="form" class="container">
    <br /><br />
    <Header>Technical Difficulties :(</Header>
    <p style="text-align: center;">We're running into a few technical difficulties right now </p>
    <p style="text-align: center;">In the meantime, please fill out the <b><NuxtLink to="https://docs.google.com/forms/d/e/1FAIpQLSdB600U6nHAGynJ4GJUMbAhAQo1MIeO129ka8xCzbBYTnGwPA/viewform">pre-registration</NuxtLink></b> form and we'll email you when registration is back up!</p>
    <br><br>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import {
  Form,
  Field,
  ErrorMessage,
  useForm,
  useFormValues,
} from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import { useUtils } from '../composables/useUtils';
import MLHSchools from '../static/mlh-schools.json';
import type { CountryData, Region } from 'country-region-data';
import { allCountries } from 'country-region-data';
import type { AutoCompleteCompleteEvent } from 'primevue/autocomplete';
import { Value } from 'sass';
import { Options } from 'tsparticles-engine';
import { useRouter } from 'vue-router';
const { performPostRequest, getEnvVariable } = useUtils();
const router = useRouter();
const isSending = ref(false); //form submitting
const submitTimes = ref(0);

interface RegisterForm {
  firstName: string;
  lastName: string;
  spelling: string;
  email: string;
  phone: string;
  gender: string;
  genderOther: string;
  pronouns?: string;
  race: string[];
  linkedIn?: string;
  age: string;
  parentEmail: string;
  education: string;
  school: string;
  schoolOther: string;
  major: string;
  country: string;
  region: string;
  zipcode: string;
  attendance: string;
  isFirstHackathon: string;
  isFirstTechnica: string;
  // isAlumni: string;
  yearsExperience: number;
  topics: string[];
  track: string;
  dietaryRestrictions: any[];
  foodAllergies: string;
  foodAllergiesText?: string;
  hear: any[];
  size: string;
  resume?: any;
  accommodations?: string;
  technicaValid?: string;
  mlhValidCoC?: string;
  mlhValid?: string;
  mlhEmails?: string;
  agreeNewsletter?: string;
  dataRights?: string;
}

const validationSchema = yup.object<RegisterForm>({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  spelling: yup.string().required('Phonetic spelling is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number is required'),
  gender: yup.string().required('Gender selection is required'),
  genderOther: yup
    .string()
    .required('Please enter a gender')
    .when('gender', ([gender], schema: any) => {
      return gender == 'other' ? schema.required() : schema.notRequired();
    }),
  pronouns: yup.string().notRequired(),
  race: yup
    .array()
    .min(1, 'At least one race must be selected')
    .required('Race(s) are required'),
  raceOther: yup
    .string()
    .required('Please enter a race')
    .when('race', (race, schema: any) => {
      return !race.includes('other')
        ? schema.notRequired()
        : schema.required('Race(s) are required');
    }),
  linkedIn: yup.string().notRequired(),
  age: yup
    .number()
    .min(1, 'Age must be greater or equal to 1')
    .nullable() // Allows null or undefined values
    .required('Age is required')
    .typeError('Age must be a number'),

  parentEmail: yup
    .string()
    .email('Invalid parent or guardian email address')
    .when('age', ([age], schema: any) => {
      return !Number.isInteger(age) || parseInt(age) >= 18
        ? schema.notRequired()
        : schema.required('Parent or guardian email is required');
    }),

  education: yup.string().required('Education level is required'),
  school: yup.string().required('School name is required'),
  schoolOther: yup
    .string()
    .required('Please enter a school')
    .when('school', ([school], schema: any) => {
      return school == 'Other' ? schema.required() : schema.notRequired();
    }),
  major: yup.string().required('Major is required'),
  country: yup.string().required('Country is required'),
  region: yup.string().required('Region is required'),
  zipcode: yup
    .string()
    .required('Zip code is required')
    .when('country', ([country], schema: any) => {
      return country == 'United States'
        ? schema.required()
        : schema.notRequired();
    }),
  attendance: yup.string().required('Please specify how you will be attending'),
  isFirstHackathon: yup
    .string()
    .required('Please specify if this is your first hackathon'),
  isFirstTechnica: yup
    .string()
    .required('Please specify if this is your first time at Technica'),
  // isAlumni: yup
  //   .string()
  //   .required('Please specify if you are an alumni'),
  yearsExperience: yup
    .string()
    .required('Please specify how many years of CS experience you have'),
  topics: yup
    .array()
    .min(1, 'At least one topic of interest must be selected')
    .required('Topics of interest are required'),
  track: yup.string().required('Please select a track'),
  dietaryRestrictions: yup
    .array()
    .min(1, 'At least one dietary restriction must be selected')
    .required('Dietary restrictions are required'),
  dietaryRestrictionsOther: yup
    .string()
    .required('Please enter a dietary restriction')
    .when('dietaryRestrictions', (dietaryRestrictions, schema: any) => {
      return !dietaryRestrictions.includes('other')
        ? schema.notRequired()
        : schema.required('Please enter a dietary restriction');
    }),
  foodAllergies: yup
    .string()
    .required('Please select any food allergies you have'),
  foodAllergiesText: yup
    .string()
    .required('Please enter a food allergy')
    .when('foodAllergies', ([foodAllergies], schema: any) => {
      return foodAllergies === 'No'
        ? schema.notRequired()
        : schema.required('Please select any food allergies you have');
    }),
  hear: yup
    .array()
    .min(1, 'At least one option must be selected')
    .required('Please select how you heard about us'),
  hearOther: yup
    .string()
    .required('Please enter a source')
    .when('hear', (hear, schema: any) => {
      return hear.includes('other')
        ? schema.required('Please enter a source')
        : schema.notRequired();
    }),
  accommodations: yup.array().notRequired(),
  accommodationsOther: yup
    .string()
    .required('Please enter an accommodation')
    .when('accommodations', (accommodations, schema: any) => {
      return accommodations.includes('other')
        ? schema.required('Please enter an accommodation')
        : schema.notRequired();
    }),
  size: yup.string().required('T-shirt size is required'),
  resume: yup.mixed().notRequired(),
  technicaValid: yup
    .string()
    .required('Agreement of Technica conditions is required'),
  dataRights: yup
    .string()
    .required('Agreement to the Data Rights Agreement is required'),
  mlhValidCoC: yup
    .string()
    .required('Agreement of MLH Code of Conduct is required'),
  mlhValid: yup.string().required('Agreement of MLH conditions is required'),
});

interface Option {
  text: string;
  value: string;
}

const countryOptions = allCountries.map((c: CountryData) => c[0]);

function getRegionOptions(country: string) {
  const regs = allCountries.find((c: CountryData) => c[0] === country)![2];
  return regs.map((r: Region) => r[0]);
}
const genderOptions = ref<Option[]>([
  {
    text: 'Cisgender Woman (identifies and assigned at birth as female)',
    value: 'cis-woman',
  },
  {
    text: 'Cisgender Man (identifies and assigned at birth as male)',
    value: 'cis-man',
  },
  { text: 'Transgender Woman', value: 'trans-woman' },
  { text: 'Transgender Man', value: 'trans-man' },
  { text: 'Non-binary', value: 'non-binary' },
  { text: 'Genderqueer', value: 'genderqueer' },
  { text: 'Other', value: 'other' },
]);

const raceOptions = ref<Option[]>([
  { text: 'White', value: 'white' },
  { text: 'Black or African American', value: 'black-african-american' },
  { text: 'Hispanic', value: 'hispanic' },
  { text: 'Middle Eastern', value: 'middle-eastern' },
  {
    text: 'American Indian or Alaska Native',
    value: 'american-indian-alaska-native',
  },
  { text: 'Asian', value: 'asian' },
  {
    text: 'Native Hawaiian or other Pacific Islander',
    value: 'native-hawaiian-pacific-islander',
  },
  { text: 'Other', value: 'other' },
]);

const ageOptions = ref<Option[]>([
  { text: 'No', value: 'No' },
  { text: 'Yes', value: 'Yes' },
]);

const sizeOptions = ref([
  '3XS',
  '2XS',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  '2XL',
  '3XL',
]);

const hearOptions = ref<Option[]>([
  { text: 'Instagram', value: 'instagram' },
  { text: 'Facebook', value: 'facebook' },
  { text: 'Twitter', value: 'twitter' },
  { text: 'TikTok', value: 'tiktok' },
  { text: 'YouTube', value: 'youtube' },
  { text: 'LinkedIn', value: 'linkedin' },
  { text: 'Google', value: 'google' },
  { text: 'Major League Hacking', value: 'mlh' },
  { text: 'Email Listserv', value: 'email' },
  { text: 'Flyer or Poster', value: 'flyer' },
  { text: 'Friend', value: 'friend' },
  { text: 'Other', value: 'other' },
]);

const dietaryRestrictionsOptions = ref<Option[]>([
  { text: 'Vegan', value: 'vegan' },
  { text: 'Vegetarian', value: 'vegetarian' },
  { text: 'Gluten Free', value: 'gluten-free' },
  { text: 'Dairy Free', value: 'dairy-free' },
  { text: 'Nut Allergy', value: 'nut-allergy' },
  { text: 'Kosher', value: 'kosher' },
  { text: 'Halal', value: 'halal' },
  { text: 'None', value: 'none' },
  { text: 'Other', value: 'other' },
]);

const topicsOfInterest = ref<Option[]>([
  { text: 'AI and Machine Learning', value: 'ai-and-machine-learning' },
  { text: 'Cloud Computing', value: 'cloud-computing' },
  { text: 'Data Science', value: 'data-science' },
  { text: 'Startups', value: 'startups' },
  { text: 'Research', value: 'research' },
  { text: 'UI/UX', value: 'ui-ux' },
  { text: 'Web Development', value: 'web-development' },
]);

const foodAllergiesOptions = ref<Option[]>([
  { text: 'No', value: 'No' },
  { text: 'Yes', value: 'Yes' },
]);

const accommodationsOptions = ref<Option[]>([
  { text: 'Laptop', value: 'laptop' },
  { text: 'ASL Interpreter', value: 'asl-interpreter' },
  { text: 'Guides', value: 'guides' },
  { text: 'Earplugs', value: 'earplugs' },
  { text: 'Masks', value: 'masks' },
  { text: 'Other', value: 'other' },
]);

const agreeRules = ref({ text: 'agree rules', value: 'Yes' });
const agreeEmails = ref({ text: 'agree emails', value: 'Yes' });
const agreeNewsletter = ref({ text: 'agree newsletter', value: 'Yes' });
const agreeDataRights = ref({ text: 'agree dataRights', value: 'Yes' });

interface UserInput {
  attendanceType: string;
  isFirstHackathon: string;
  isFirstTechnica: string;
  // isAlumni: string;
  yearsExperience: string;
  topicsOfInterest: string[];
  education: string;
}

// Define reactive variables
const userInput = reactive<UserInput>({
  education: '',
  attendanceType: '',
  isFirstHackathon: '',
  isFirstTechnica: '',
  // isAlumni: '',
  yearsExperience: '',
  topicsOfInterest: [],
});

// Define other reactive variables and options
const attendanceOptions: Option[] = [
  { text: 'In-Person', value: 'in-person' },
  { text: 'Virtual', value: 'virtual' },
  { text: 'Hybrid', value: 'hybrid' },
];

const firstHackathon: Option[] = [
  { text: 'No', value: 'No' },
  { text: 'Yes', value: 'Yes' },
];

const firstTechnica: Option[] = [
  { text: 'No', value: 'No' },
  { text: 'Yes', value: 'Yes' },
];

// const alumni: Option[] = [
//   { text: 'No', value: 'No' },
//   { text: 'Yes', value: 'Yes' }
// ];

const experience: string[] = ['0', '1', '2', '3', '4', '5+'];

// Function to check if education is high school or lower
const isHighSchoolOrLower = (education: string): boolean => {
  const highSchoolOrLowerOptions = [
    'Less than Secondary / High School',
    'Secondary / High School',
  ];
  return !education || highSchoolOrLowerOptions.includes(education);
};

// Compute recommended tracks based on user input
const recommendedTracks = computed(() => {
  const tracks: { text: string; value: string }[] = [];

  tracks.push({ text: 'General', value: 'general' });

  if (userInput.attendanceType === 'in-person') {
    tracks.push({ text: 'Startup', value: 'startup' });
    if (
      userInput.isFirstHackathon === 'Yes' &&
      parseInt(userInput.yearsExperience) >= 0 &&
      parseInt(userInput.yearsExperience) <= 2
    ) {
      tracks.push({ text: 'Beginner', value: 'beginner' });
    }

    if (!isHighSchoolOrLower(userInput.education)) {
      tracks.push({ text: 'Research', value: 'research' });
    }
  }

  return tracks;
});

const educationOptions = ref([
  'Less than Secondary / High School',
  'Secondary / High School',
  'Undergraduate University (2 year - community college or similar)',
  'Undergraduate University (3+ year)',
  'Graduate University (Masters, Professional, Doctoral, etc)',
  'Code School / Bootcamp',
  'Other Vocational / Trade Program or Apprenticeship',
  'Post Doctorate',
  'Other',
  'I’m not currently a student',
  'Prefer not to answer',
]);

const majorOptions = ref([
  'Computer science, computer engineering, or software engineering',
  'Another engineering discipline (such as civil, electrical, mechanical, etc.)',
  'Information systems, information technology, or information science',
  'A natural science (such as biology, chemistry, physics, etc.)',
  'Mathematics or statistics',
  'Web development or web design',
  'Business discipline (such as accounting, finance, marketing, etc.)',
  'Humanities discipline (such as literature, history, philosophy, etc.)',
  'Social science (such as anthropology, psychology, political science, etc.)',
  'Fine arts or performing arts (such as graphic design, music, studio art, etc.)',
  'Health science (such as nursing, pharmacy, radiology, etc.)',
  'Other',
  'Undecided / No Declared Major',
  'My school does not offer majors / primary areas of study',
  'Prefer not to answer',
]);

// for autocomplete form input
const schoolList = MLHSchools;
const filteredSchools = ref();

const search = (event: AutoCompleteCompleteEvent) => {
  setTimeout(() => {
    if (!event.query) {
      filteredSchools.value = [...schoolList];
    } else {
      filteredSchools.value = schoolList.filter((school) => {
        return school.toLowerCase().includes(event.query.toLowerCase());
      });
    }
  }, 250);
};

const resumeFile = ref<File>();

const registerUser = async (values: Record<string, any>) => {
  let fd = new FormData();

  if (
    resumeFile &&
    resumeFile.value &&
    resumeFile.value.type != 'application/pdf'
  ) {
    alert('Resume must be in pdf form');
    return;
  }

  if ((document.getElementById('resume')! as any).files.length != 0) {
    fd.append(
      'pdf',
      resumeFile.value as Blob,
      self.crypto.randomUUID() + '.pdf'
    );
  }

  isSending.value = true;

  // Add other fields to input lists
  if (values.gender == 'other') {
    values.gender = 'Other: ' + values.genderOther;
  }

  if (values.school == 'Other') {
    values.school = 'Other: ' + values.schoolOther;
  }

  if (values.pronouns == '') {
    values.pronouns = 'Not Listed';
  }

  if (values.raceOther != null) {
    let idx = values.race.findIndex((acc: string) => acc == 'other');
    values.race[idx] = 'other: ' + values.raceOther;
  }

  if (values.linkedIn == '') {
    values.linkedIn = 'Not Listed';
  }

  if (values.dietaryRestrictions != null) {
    let idx = values.dietaryRestrictions.findIndex(
      (acc: string) => acc == 'other'
    );
    values.dietaryRestrictions[idx] =
      'other: ' + values.dietaryRestrictionsOther;
  }

  if (values.hear != null) {
    let idx = values.hear.findIndex((acc: string) => acc == 'other');
    values.hear[idx] = 'other: ' + values.hearOther;
  }

  if (values.accommodations != null) {
    let idx = values.accommodations.findIndex((acc: string) => acc == 'other');
    values.accommodations[idx] = 'other: ' + values.accommodationsOther;
  }

  if (values.agreeNewsletter == null) {
    values.agreeNewsletter = 'No';
  }

  //Test input for submission
  // let testInput = {
  //   timestamp: "test",
  //   firstName: "test",
  //   lastName: "test",
  //   spelling: "test",
  //   email: "jirachiji@gmail.com",
  //   phone: "test",
  //   name: "test",
  //   gender: "test",
  //   pronouns: "test",
  //   race: "test",
  //   age: "test",
  //   parentEmail: "test",
  //   education: "test",
  //   school: "test",
  //   major: "test",
  //   country: "test",
  //   region: "test",
  //   zipcode: "test",
  //   isFirstHackathon: "test",
  //   isFirstTechnica: "test",
  //   yearsExperience: "test",
  //   topics: "test",
  //   track: "test",
  //   size: "test",
  //   attendance: "test",
  //   technicaValid: "test",
  //   mlhPrivacy: "test",
  //   mlhConduct: "test",
  //   mlhEmails: "test",
  //   hear: "test",
  //   dietaryRestrictions: "test",
  //   foodAllergies: "test",
  //   foodAllergiesText: "test",
  //   accomodations: "test"
  // }

  for (let key in values) {
    fd.append(key, values[key as keyof typeof values]);
  }

  // Add referral code if it exists
  let params = new URL(document.location as any).searchParams;
  let referral = params.get('referral');

  fd.append('referral', referral as string);
  
  try {
    const response = await performPostRequest(
      getEnvVariable('BACKEND_ENDPOINT') as string,
      'signup',
      fd
    );

    isSending.value = false;

    if (!response) {
      alert(
        'Sorry, there was an error with the submission. Please try again later. noresponse'
      );
    } else if (response.error.value && response.error.value.statusCode == 500) {
      alert('status code 500');
    } else {
      // window.location.href = '/registrationconfirmation';
      router.push({path: "/RegistrationConfirmation"});
    }
  } catch (error: any) {
    console.log(error)
    alert(
      'Sorry, there was an error with the submission. Please try again later. Catch'
    );
  }
};

function getFileUpload(e: any) {
  resumeFile.value = e.target.files[0];
}
</script>

<style scoped lang="scss">
a {
  color: #F1ADCD;
}

h1 {
  font-family: 'poppins';
  text-align: center;
  font-size: 1.5em;
  color: white;
  white-space: nowrap;
  padding: 1em 0;
}

h1:first-of-type{
  margin-top: 1em;
}


H3 {
  color: $DARK_PURPLE;
}

.container {
  margin-bottom: 5rem;
}

.disclaimer {
  padding: 2rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
}

.form-label {
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.form-control,
.form-select,
.form-check-input,
.p-autocomplete {
  border: 2px solid #a464d8;
}

.form-check-label {
  color: white;
}

.form-check.mt-4 a {
  color: #aba0df;
}

.p-autocomplete {
  border-radius: 6px;

  & :deep(.p-autocomplete-input) {
    border-radius: 5px;
  }
}

ul {
  list-style: none;
}

.submit-btn {
  width: 100%;
  margin-left: -1rem;
  margin-bottom: 5rem;
  
}

.text-center {
  margin: auto;
}

.conditions {
  padding-inline-start: 0;
}

.invalid-feedback {
  display: block;
}

/* styling for primevue autocomplete component */
:deep(.p-inputtext) {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-family: 'Poppins' !important;
}

:deep(.p-autocomplete) {
  width: 100%;
}

:global(.p-autocomplete-panel) {
  max-width: min(500px, calc(100% - 6rem));
}

.error p {
  margin-top: -2rem;
  margin-left: 2.5rem;
}
</style>
