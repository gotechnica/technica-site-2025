<template>
  <title>Register</title>
  <div id="form" class="container">
    <h1 class="text-center my-5">Registration is closed for Technica 2023!</h1>
    <p style="text-align: center;">If you already registered, check your email inbox for an important email from us for check-in instructions. We can't wait for you to <b>#CreateYourReality</b> at Technica!</p>
    <h1 class="text-center my-4">Technica Registration Form 2023</h1>
    <Form v-slot="{ values, errors }" :validation-schema="validationSchema" @submit="registerUser">
      <!-- HACKER INFO -->
      <H1>Hacker Info</H1>
      <div class="row gx-5">
        <div class="col-md-4 mb-4">
          <div>
            <label class="form-label"> First Name* </label>
            <Field name="firstName" type="text" value="" placeholder="First" class="form-control"
              :class="{ 'is-invalid': errors['firstName'] }" />
            <ErrorMessage :name="'firstName'" class="invalid-feedback" />
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div>
            <label class="form-label"> Last Name* </label>
            <Field name="lastName" type="text" value="" placeholder="Last" class="form-control"
              :class="{ 'is-invalid': errors['lastName'] }" />
            <ErrorMessage :name="'lastName'" class="invalid-feedback" />
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div>
            <label class="form-label"> Phonetic Spelling* </label>
            <Field name="spelling" type="text" value="" placeholder="tek-ni-ka" class="form-control"
              :class="{ 'is-invalid': errors['spelling'] }" />
            <ErrorMessage :name="'spelling'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <div>
            <label class="form-label"> Email* </label>
            <Field name="email" type="text" value="" placeholder="hello@gotechnica.org" class="form-control"
              :class="{ 'is-invalid': errors['email'] }" />
            <ErrorMessage :name="'email'" class="invalid-feedback" />
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div>
            <label class="form-label"> Phone Number* </label>
            <Field name="phone" type="text" value="" placeholder="5552341230" class="form-control"
              :class="{ 'is-invalid': errors['phone'] }" />
            <ErrorMessage :name="'phone'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <div>
            <label class="form-label">Gender Identity*</label>
            <Field name="gender" as="select" class="form-select" :class="{ 'is-invalid': errors['gender'] }">
              <option v-for="option in genderOptions" :value="option.value">
                {{ option.text }}
              </option>
            </Field>
            <ErrorMessage :name="'gender'" class="invalid-feedback" />
          </div>
          <div class="mt-1" v-if="values.gender?.includes('other')">
            <Field name="genderOther" type="text" value="" placeholder="Other" class="form-control"
              :class="{ 'is-invalid': errors['genderOther'] }" />
            <ErrorMessage :name="'genderOther'" class="invalid-feedback" />
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div>
            <label class="form-label"> Pronouns </label>
            <Field name="pronouns" type="text" value="" placeholder="she/they" class="form-control" />
          </div>
        </div>
      </div>

      <p class="description">
        Please note, Cisgender Men (someone who identifies as male and was
        assigned male at birth) are not eligible to participate at Technica.
        This hackathon serves to promote, support, and celebrate technologists
        of underrepresented genders!
      </p>
      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <label class="form-label"> What race(s) do you identify as?* </label>
          <div class="form-check" v-for="option in raceOptions">
            <Field name="race" :value="option.value" type="checkbox" class="form-check-input" :id="option.value"
              :class="{ 'is-invalid': errors['race'] }" required />

            <label class="form-check-label" :for="option.value">
              {{ option.text }}
            </label>
          </div>
          <ErrorMessage :name="'race'" class="invalid-feedback" />
          <div v-if="values.race?.includes('other')">
            <Field name="raceOther" type="text" value="" placeholder="Other" class="form-control"
              :class="{ 'is-invalid': errors['raceOther'] }" />
            <ErrorMessage :name="'raceOther'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <div>
            <label class="form-label">
              What age will you be during Technica (October 21-22)?*
            </label>
            <Field name="age" type="text" value="" class="form-control" :class="{ 'is-invalid': errors['age'] }"
              required />
          </div>

          <p class="description">
            <br>
            If you will be a minor (under 18 years of age) at any point during
            Technica, we will need your guardian's email. We will email a waiver
            to you and your guardian to sign closer to the event. Minors who plan
            to attend the event in-person will need to be accompanied by a chaperone.
            A chaperone can accompany up to six minors. 
          </p>

          <div class="mt-4" v-if="parseInt(values.age) < 18">
            <label class="form-label"> Parent or Guardian Email* </label>
            <Field name="parentEmail" type="text" value="" placeholder="hello@gotechnica.org" class="form-control"
              :class="{ 'is-invalid': errors['parentEmail'] }" />
            <ErrorMessage :name="'parentEmail'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <!-- EDUCATION -->
      <H1 class="blue"> Education </H1>
      <div class="row gx-5">
        <div class="col-md-4 mb-4">
          <div class="mb-4">
            <label class="form-label">Education Level*</label>
            <Field name="education" as="select" class="form-select" :class="{ 'is-invalid': errors['education'] }"
              required v-model ="userInput.education">
              <option v-for="option in educationOptions" :value="option">
                {{ option }}
              </option>
            </Field>
            <ErrorMessage :name="'education'" class="invalid-feedback" />
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="mb-4">
            <label class="form-label">School Name*</label>
            <AutoComplete v-model="values.school" name="school" inputId="school" :suggestions="filteredSchools"
              @complete="search" placeholder="The University of Maryland, College Park"
              :class="{ 'p-invalid': submitTimes > 0 && (values.school == null || values.school == '')}" required />
            <div v-if="submitTimes > 0 && (values.school == null || values.school == '')">
              <ErrorMessage name="school" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="mb-4">
            <label class="form-label">Major*</label>
            <Field name="major" as="select" class="form-select" :class="{ 'is-invalid': errors['major'] }" required>
              <option v-for="major in majorOptions" :value="major">
                {{ major }}
              </option>
            </Field>
            <ErrorMessage :name="'major'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <!-- LOCATION -->
      <H1>Location</H1>
      <p>
        Please make sure to enter the place you'll be departing from for
        Technica. For hackers in the U.S. only, select zip codes will be
        eligible to apply for travel assistance. Double check that you have
        entered your location correctly! For more info about travel, visit our
        <a href="/travel" target="_blank">travel page</a>.
      </p>
      <div class="mb-4">
        <div class="row gx-5">
          <div class="col-md-4">
            <label class="form-label">Country*</label>
            <Field name="country" as="select" class="form-select" :class="{ 'is-invalid': errors['country'] }" required>
              <option v-for="option in countryOptions" :value="option">
                {{ option }}
              </option>
            </Field>
            <ErrorMessage :name="'country'" class="invalid-feedback" />
          </div>
          <div class="col-md-4" v-if="values.country">
            <label class="form-label">Region*</label>
            <Field name="region" as="select" class="form-select" :class="{ 'is-invalid': errors['region'] }" required>
              <option v-for="option in getRegionOptions(values.country)" :value="option">
                {{ option }}
              </option>
            </Field>
            <ErrorMessage :name="'region'" class="invalid-feedback" />
          </div>
          <div class="col-md-4" v-if="values.country === 'United States'">
            <label class="form-label">Zipcode*</label>
            <Field name="zipcode" type="text" value="" placeholder="" class="form-control"
              :class="{ 'is-invalid': errors['zipcode'] }" required />
            <ErrorMessage :name="'zipcode'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <!-- TRACKS -->
      <H1 class="green">Tracks</H1>
      <p class="description">
        Tracks accommodate a hacker's interests and skill level and can provide
        a more guided hackathon experience. Visit the
        <a href="/Tracks" target="_blank">tracks page</a> for more information!
        We provide recommendations for tracks you may be interested in, but you
        may ultimately choose any that you'd like. Please note that some tracks
        are for in-person attendance only, and may have limited slots.
      </p>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <div class="mb-4">
            <label class="form-label">Will you be attending online or in person?*</label>
            <select id="attendance" v-model="userInput.attendanceType" @change = "updateRecommendedTracks" class="form-select" :class="{ 'is-invalid': errors['attendanceType'] }" required>
              <option v-for="option in attendanceOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
            </select>
            <ErrorMessage :name="'attendanceType'" class="invalid-feedback" />
          </div>


          <div class="mb-4">
            <div>
              <label class="form-label">Is this your first hackathon?*</label>
              <div class="form-check" v-for="option in firstHackathon" :key="option.value">
                <Field name="isFirstHackathon" v-model="userInput.isFirstHackathon" :value="option.value" type="radio" class="form-check-input"
                  :id="`first-hackathon-${option.value}`" :class="{ 'is-invalid': errors['isFirstHackathon'] }"
                  required />
                <label class="form-check-label" :for="`first-hackathon-${option.value}`">
                  {{ option.text }}
                </label>
              </div>
              <ErrorMessage :name="'isFirstHackathon'" class="invalid-feedback" />
            </div>
          </div>

          <div class="mb-4">
            <div>
              <label class="form-label">Is this your first time at Technica?*</label>
              <div class="form-check" v-for="option in firstTechnica" :key="option.value">
                <Field name="isFirstTechnica" v-model="userInput.isFirstTechnica" :value="option.value" type="radio" class="form-check-input"
                  :id="`first-technica-${option.value}`" :class="{ 'is-invalid': errors['isFirstTechnica'] }" required />
                <label class="form-check-label" :for="`first-technica-${option.value}`">
                  {{ option.text }}
                </label>
              </div>
              <ErrorMessage :name="'isFirstTechnica'" class="invalid-feedback" />
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="mb-4">
            <label class="form-label">How many years of CS experience do you have?*</label>
            <Field name="yearsExperience" v-model="userInput.yearsExperience" as="select" class="form-select" :class="{ 'is-invalid': errors['yearsExperience'] }" required>
              <option v-for="option in experience" :key="option" :value="option">
                {{ option }}
              </option>
            </Field>
            <ErrorMessage :name="'yearsExperience'" class="invalid-feedback" />
          </div>

          <div class="mb-4">
            <label class="form-label">What topics do you want to learn about?*</label>
            <div class="form-check" v-for="option in topicsOfInterest" :key="option.value">
              <Field name="topics" v-model="userInput.topicsOfInterest" :value="option.value" type="checkbox" class="form-check-input"
                :id="`topics-${option.value}`" :class="{ 'is-invalid': errors['topics'] }" />
              <label class="form-check-label" :for="`topics-${option.value}`">
                {{ option.text }}
              </label>
            </div>
            <ErrorMessage :name="'topics'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <label class="form-label">Which track do you wish to participate in?*</label>
          <p><b>**Note</b>: All special tracks are closed now.</p>
          <div class="form-check" v-for="option in trackOptions" :key="option.value">
            <Field name="track" :value="option.value" type="radio" class="form-check-input" />
            <label class="form-check-label">{{ option.text }}</label>
          </div>
        </div>

        <!-- Display recommended tracks -->
        <div class="col-md-6 mb-4">
          <label class="form-label">Recommended Tracks:</label>
          <ul>
            <li v-for="track in recommendedTracks" :key="track">
            {{ track }}</li>
          </ul>
        </div>
      </div>
  

      <!-- EVENT INFO -->
      <H1>Event Info</H1>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <div class="mb-4">
            <label class="form-label">Dietary Restrictions*</label>
            <div class="form-check" v-for="option in dietaryRestrictionsOptions">
              <Field name="dietaryRestrictions" :value="option.value" type="checkbox" class="form-check-input"
                :id="option.value" :class="{ 'is-invalid': errors['dietaryRestrictions'] }" required />
              <label class="form-check-label" :for="option.value">
                {{ option.text }}
              </label>
            </div>
            <ErrorMessage :name="'dietaryRestrictions'" class="invalid-feedback" />

            <div v-if="values.dietaryRestrictions?.includes('other')">
              <Field name="dietaryRestrictionsOther" type="text" value="" placeholder="Other" class="form-control"
                :class="{ 'is-invalid': errors['dietaryRestrictionsOther'] }" />
              <ErrorMessage :name="'dietaryRestrictionsOther'" class="invalid-feedback" />
            </div>
          </div>

          <div>
            <label class="form-label">Do you have any severe food allergies?*</label>
            <div class="form-check" v-for="option in foodAllergiesOptions">
              <Field name="foodAllergies" :value="option.value" type="radio" class="form-check-input"
                :id="`food-allergies-${option.value}`" :class="{ 'is-invalid': errors['foodAllergies'] }" required />
              <label class="form-check-label" :for="option.value">
                {{ option.text }}
              </label>
            </div>
            <ErrorMessage :name="'foodAllergies'" class="invalid-feedback" />
            <div v-if="values.foodAllergies === 'Yes'">
              <Field name="foodAllergiesText" type="text" value="" placeholder="Food allergies" class="form-control"
                :class="{ 'is-invalid': errors['foodAllergiesText'] }" />
              <ErrorMessage :name="'foodAllergiesText'" class="invalid-feedback" />
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <label class="form-label">How did you hear about us?*</label>
          <div class="form-check" v-for="option in hearOptions">
            <Field name="hear" :value="option.value" type="checkbox" class="form-check-input" :id="option.value"
              :class="{ 'is-invalid': errors['hear'] }" required />
            <label class="form-check-label" :for="option.value">
              {{ option.text }}
            </label>
          </div>
          <ErrorMessage :name="'hear'" class="invalid-feedback" />

          <div v-if="values.hear?.includes('other')">
            <Field name="hearOther" type="text" value="" placeholder="Other" class="form-control"
              :class="{ 'is-invalid': errors['hearOther'] }" />
            <ErrorMessage :name="'hearOther'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <div class="row gx-5">
        <div class="col-md-6 mb-4">
          <div class="mb-4">
            <label class="form-label">T-Shirt Size*</label>
            <Field name="size" as="select" class="form-select" :class="{ 'is-invalid': errors['size'] }" required>
              <option v-for="option in sizeOptions" :value="option">
                {{ option }}
              </option>
            </Field>
            <ErrorMessage :name="'size'" class="invalid-feedback" />
          </div>
          <div>
            <label for="resume" class="form-label">Upload Resume</label>
            <Field name="resume">
              <input class="form-control" type="file" id="resume" @change="getFileUpload" />
            </Field>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <label class="form-label">Accommodations</label>
          <div class="form-check" v-for="option in accommodationsOptions">
            <Field name="accommodations" :value="option.value" type="checkbox" class="form-check-input"
              :id="option.value" />
            <label class="form-check-label" :for="option.value">
              {{ option.text }}
            </label>
          </div>

          <div v-if="values.accommodations?.includes('other')">
            <Field name="accommodationsOther" type="text" value="" placeholder="Other" class="form-control"
              :class="{ 'is-invalid': errors['accommodationsOther'] }" />
            <ErrorMessage :name="'accommodationsOther'" class="invalid-feedback" />
          </div>
        </div>
      </div>

      <p>
        If you choose to share your resume with us, it will be shared with our
        sponsors for opportunities. You may upload or update your resume during
        the event.
      </p>

      <!-- RULES AND PRIVACY POLICY -->

      <H1 class="mb-2">Rules and Privacy Policies</H1>
      <div class="form-check">
        <Field name="technicaValid" type="checkbox" class="form-check-input" :value="agreeRules.value"
          :id="`agree-rules-${agreeRules.value}`" :class="{ 'is-invalid': errors['technicaValid'] }" required />
        <label class="form-check-label">
          I agree to the conditions below:
        </label>
      </div>
      <ul class="conditions mt-4 ms-4">
        <li>
          <b>I identify as a person of an underrepresented gender in tech. </b>This includes but is not limited to:
          cisgender women, transgender
          women, transgender men, non-binary individuals, genderqueer
          individuals, and other underrepresented genders.
        </li>

        <li>
          I authorize you to share my application/registration information with
          Major League Hacking for event administration, ranking, and MLH
          administration in-line with the
          <a href="https://mlh.io/privacy" target="_blank">MLH Privacy Policy</a>. I further agree to the terms of both
          the
          <a href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md" target="_blank">MLH Contest Terms and
            Conditions</a>
          and the
          <a href="https://mlh.io/privacy" target="_blank">MLH Privacy Policy</a>.
        </li>

        <li>
          I have read and agree to the
          <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>.
        </li>
      </ul>
      <ErrorMessage :name="'technicaValid'" class="invalid-feedback ms-4" />

      <div class="form-check mt-4">
        <Field name="mlhEmails" type="checkbox" class="form-check-input" :value="agreeEmails.value"
          :id="`agree-emails-${agreeEmails.value}`" :class="{ 'is-invalid': errors['mlhEmails'] }" />

        <label class="form-check-label">
          I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.
        </label>
      </div>

      <div class="form-check mt-4">
        <Field name="agreeNewsletter" type="checkbox" class="form-check-input" :value="agreeNewsletter.value"
          :id="`agree-newsletter-${agreeNewsletter.value}`" :class="{ 'is-invalid': errors['agreeNewsletter'] }" />

        <label class="form-check-label">
          I agree to opt into the monthly Technica newsletter.
        </label>
      </div>
      <button type="submit" class="btn mt-4" @click="submitTimes++">
        <PixelButton class="submit-btn" text="Submit" img="purple-button-normal.svg" hover="purple-button-hover.svg"
          click="purple-button-onclick.svg" />
      </button>
    </Form>
  </div>
  <StickyButton></StickyButton>
</template>

<script setup lang="ts">
import {reactive, computed} from 'vue';
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
import { allCountries, CountryData, Region } from 'country-region-data';
import { AutoCompleteCompleteEvent } from 'primevue/autocomplete';
import { Value } from 'sass';
import { Options } from 'tsparticles-engine';
const { performPostRequest, getEnvVariable } = useUtils();
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
  age: string;
  guardianEmail: string;
  education: string;
  school: string;
  major: string;
  country: string;
  region: string;
  zipcode: string;
  attendance: string;
  isFirstHackathon: string;
  isFirstTechnica: string;
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
  mlhEmails?: string;
  agreeNewsletter?: string;
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
  gender: yup
    .string()
    .test(
      'cis-man',
      'Cisgender men are not allowed to participate',
      function (value) {
        const isCisgenderMale = value?.includes('cis-man');
        return !isCisgenderMale;
      }
    )
    .required('Gender selection is required'),
  genderOther: yup
    .string()
    .required('Please enter a gender')
    .when('gender', ([gender], schema: any) => {
      return gender == 'other' ? schema.required() : schema.notRequired();
    }),
  pronouns: yup.string(),
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
  age: yup.number().min(1).required('Age is required'),

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
  attendance: yup
    .string()
    .required('Please select if the event is online or in person'),
  isFirstHackathon: yup
    .string()
    .required('Please specify if this is your first hackathon'),
  isFirstTechnica: yup
    .string()
    .required('Please specify if this is your first time at Technica'),
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
      return !hear.includes('other')
        ? schema.notRequired()
        : schema.required('Please enter a source');
    }),
  accommodations: yup.array().notRequired(),
  accommodationsOther: yup
    .string()
    .required('Please enter an accommodation')
    .when('accommodations', (accommodations, schema: any) => {
      return !accommodations.includes('other')
        ? schema.notRequired()
        : schema.required('Please enter an accommodation');
    }),
  size: yup.string().required('T-shirt size is required'),
  resume: yup.mixed().notRequired(),
  technicaValid: yup.string().required('Agreement of conditions is required'),
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
  {text: 'Hardware', value: 'hardware' },
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
  { text: 'Other', value: 'other' },
]);

const agreeRules = ref({ text: 'agree rules', value: 'Yes' });
const agreeEmails = ref({ text: 'agree emails', value: 'Yes' });
const agreeNewsletter = ref({ text: 'agree newsletter', value: 'Yes' });

interface UserInput {
  attendanceType: string;
  isFirstHackathon: string;
  isFirstTechnica: string;
  yearsExperience: string;
  topicsOfInterest: string[];
  education: string;
}

// Define reactive variables
const userInput = reactive<UserInput>({
  education: '',
  attendanceType: 'in-person',
  isFirstHackathon: '',
  isFirstTechnica: '',
  yearsExperience: '0',
  topicsOfInterest: [],
});

// Define other reactive variables and options
const attendanceOptions: Option[] = [
  { text: 'In-Person', value: 'in-person' },
  { text: 'Virtual', value: 'virtual' },
  { text: 'Hybrid', value: 'hybrid' }
];

const firstHackathon: Option[] = [
  { text: 'No', value: 'No' },
  { text: 'Yes', value: 'Yes' }
];

const firstTechnica: Option[] = [
  { text: 'No', value: 'No' },
  { text: 'Yes', value: 'Yes' }
];

const experience: string[] = ['0', '1', '2', '3', '4', '5+'];

const trackOptions: Option[] = [
  { text: 'Beginner', value: 'beginner' },
  { text: 'General', value: 'general' },
  { text: 'Hardware', value: 'hardware' }, // Add the hardware option
  { text: 'Startup', value: 'startup' },
  { text: 'Research', value: 'research' }
];

const isHighSchoolOrLower = computed(() => {
  return ['Less than Secondary / High School', 'Secondary / High School'].includes(userInput.education);
});

// Define method to update recommended tracks
const updateRecommendedTracks = () => {
  // Trigger reactivity
  recommendedTracks.value = computeRecommendedTracks(userInput);
};

// Define computed property for recommended tracks
const recommendedTracks = ref<string[]>([]);

watch(userInput, updateRecommendedTracks, { deep: true});

// Define function to compute recommended tracks based on user input
const computeRecommendedTracks = (userInput: UserInput): string[] => {
  const tracks: string[] = [];

  //Debugging
  console.log('User Input:', JSON.stringify(userInput, null, 2));

   // Check if attendance type is in-person
   if (userInput.attendanceType === 'in-person') {
    // Criteria for Beginner track
    if (
      userInput.isFirstHackathon === 'Yes' &&
      (userInput.isFirstTechnica === 'Yes' || userInput.isFirstTechnica === 'No') &&
      parseInt(userInput.yearsExperience) >= 0 &&
      parseInt(userInput.yearsExperience) <= 2
    ) {
      tracks.push('Beginner');
    }

    if (userInput.topicsOfInterest.includes('startups')) {
      tracks.push('Startup');
    }

    // Criteria for Hardware track
    if (userInput.topicsOfInterest.includes('hardware')) {
      tracks.push('Hardware');
    }

    // Criteria for Research track
    if (userInput.topicsOfInterest.some(topic => topic.toLowerCase() === 'research') && !isHighSchoolOrLower.value) {
      tracks.push('Research'); 
    }
  }

  if (tracks.length === 0) {
    tracks.push('General');
  }

  return tracks;
};

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

  if (values.raceOther != null) {
    let idx = values.race.findIndex((acc: string) => acc == 'other');
    values.race[idx] = 'other: ' + values.raceOther;
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
    values.agreeNewsletter = "No"
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
  let referral = params.get("referral");  

  fd.append("referral", referral as string)

  try {
    const response = await performPostRequest(
      getEnvVariable('BACKEND_ENDPOINT') as string,
      'signup',
      fd
    );

    isSending.value = false;

    if (
      !response ||
      (response.error.value && response.error.value.statusCode == 500)
    ) {
      alert(
        'Sorry, there was an error with the submission. Please try again later.'
      );
    } else {
      location.href = '/RegistrationConfirmation';
    }
  } catch (error: any) {
    alert(
      'Sorry, there was an error with the submission. Please try again later.'
    );
  }
};

function getFileUpload(e: any) {
  resumeFile.value = e.target.files[0];
}

</script>

<style scoped lang="scss">
a {
  color: $DARK_PURPLE;
}

h1,
H3 {
  color: $DARK_PURPLE;
}

.form-label {
  color: #212529;
  font-size: 16px;
  font-weight: 600;
}

.form-control,
.form-select,
.form-check-input,
.p-autocomplete {
  border: 2px solid #a464d8;
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
</style>
