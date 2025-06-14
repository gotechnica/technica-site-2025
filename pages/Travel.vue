<template>
  <title>Travel</title>
  <div style="margin-top: 5rem;"></div>
  <Header>Travel</Header>
  <div class="travel-container">
    <div class="travel-header section">
      <div class="process-blurb">
        <p>
          Technica will be hosted at the Reckord Armory, College Park, MD, 
          from Saturday, October 25th to Sunday, October 26th.
        </p>
        <p>
          We will offer travel reimbursement for hackers on a first-come, first-serve basis.
        </p>
        <p>
          Technica reserves the right to adjust or cancel reimbursement at any time if necessary.
        </p>
        <p>
          Please email <b><a href="mailto:travel@gotechnica.org">travel@gotechnica.org</a></b> with any questions.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 section">
        <div class="info-section">
          <h3>Reimbursement</h3>
          <p>
            <i>
              At Technica, we understand the importance of making the event accessible to participants from diverse backgrounds, 
              and we are committed to supporting your journey to our hackathon! 
            </i>
          </p>
          <p>
            Technica will provide travel reimbursement to hackers who require transportation directly 
            to the University of Maryland. 
            Reimbursements will be evaluated on a <b>first-come, first-serve basis</b> and may not cover the full cost of travel. 
            Notice of reimbursement approval/rejection will be sent via email before the event. 
            Minors are eligible to apply for travel reimbursement; please refer to the Technica 2025 Minor Policy for further details. 
          </p>
          <p>
            Travel reimbursement will be given to hackers who live more than 30 minutes away from College Park. 
          </p>
          <p>
            Eligible hackers will be contacted via email with additional information on how to apply for reimbursement. 
            Please note that hackers will <b>need to be physically present</b> during Technica in order to receive their reimbursement, 
            not attending online. Reimbursement checks will be handed out during the event at a marked table.
          </p>
          <p>
            <i>
              If hackers cannot attend the event in-person, 
              Technica offers a free, virtual environment to interact with fellow hackers online. 
            </i>
          </p>
          <p>
            Reimbursement amounts per method of transportation 
            (note that in a carpool, <b>only the driver may receive reimbursement</b>):
          </p>
          <!-- Used to list the actual reinbursement prices, edit the variable transportation for the updated price values-->
          <!-- <ul>
            <li v-for="item in transportation" :key="item.name">
              {{ item.name }}: ${{ item.minPrice }} - ${{ item.maxPrice }}
            </li>
          </ul> -->
          <p>
            Reimbursement amount is dependent on how much was spent on traveling to Technica. 
            Hackers should make sure to keep their trip purchase receipts and 
            submit the bus/train/plane itinerary of the ride/flight they intend to take. 
            We recommend that hackers wait until receiving approval from Technica before purchasing their ticket. 
            Please note that Technica <b>requires proof of travel or a receipt for reimbursement of travel expenses, 
            stating the exact amount spent</b>. 
            We will not reimburse without this documentation.
          </p>
          <p>

            Reimbursements will only be in US dollars. 
            Please note that Technica will not reimburse travel from any other country.
          </p>
          <p>
            Here are some examples of documentation to submit for reimbursement:
          </p>
          <ul class="d-inline-block text-start">
            <li v-for="transportation in documentation" :key="transportation.name">
              {{ transportation.name }}
              <ul>
                <li v-for="item in transportation.items" :key="item">
                  {{ item }}
                </li>
              </ul>
            </li>
          </ul>
          <p>
            If you are unsure whether your documentation is acceptable, 
            please email <b><a href="mailto:travel@gotechnica.org">travel@gotechnica.org</a></b> for clarification. 
          </p>
          <!-- Used for Reinbursement Form Link-->
          <!-- <VineButton text="Reimbursement Form" link="https://forms.gle/AzG5fqaQEJuyTPSH8" img="yellow-button-regular.svg" hover="yellow-on-click.svg" click="yellow-visited.svg"/> -->
        </div>
      </div>
      <div class="faq-section section">
        <Header>Frequently Asked Questions</Header>
        <FAQ faqId="main" :qaList="qaList" class="main-section" />
      </div> 
    </div>
    <div class="email-blurb section">
      <h3>Have Other Questions?</h3>
      <p class="contact-blurb">
        Email us at
        <b><a href="mailto:travel@gotechnica.org">travel@gotechnica.org</a></b>
      </p>
    </div>
    <StickyButton></StickyButton>
  </div>
</template>

<script setup lang="ts">
const qaList = [
  {
    question: 'Am I eligible for travel reimbursement?',
    answer: 'Hackers who live more than 30 minutes away from College Park are eligible to apply for travel reimbursement.',
  },
  {
    question: 'How will I receive my reimbursement?',
    answer:
      'Checks will be given at a table at the event in-person. Note that hackers must physically attend the event to receive reimbursement.',
  },
  // {
  //   question: 'How will I get my bus stop and bus tickets?',
  //   answer:
  //     'After applying for the Technica bus, stop information and times will be sent via email. Note that university stops are listed above in the “Buses” category.',
  // },
  {
    question: 'Is travel assistance guaranteed?',
    answer:
      'No, but we suggest applying for reimbursement as soon as possible, as we evaluate on a first-come, first-serve basis.',
  },
  // {
  //   question: 'Can I apply for bus and reimbursement accommodations?',
  //   answer:
  //     'No, hackers cannot apply for both. If hackers live near a Technica bus stop, they are encouraged to apply for bus accommodations. If we are not providing a bus within 30 minutes of a hacker and they are not within 30 minutes of College Park, Maryland, they may apply for travel reimbursement.',
  // },
  {
    question:
      "Will there be designated sleeping spaces?",
    answer:
      'Unfortunately, per Fire Marshal regulations, we cannot provide sleeping accommodations this year. Hackers are welcome to stay at nearby hotels, or to rest and take naps at the provided workspaces. ',
  },
];

// Used for Transportation Cost List Section
// const transportation = [
//   { name: 'Car', minPrice: 1, maxPrice: 40 },
//   { name: 'Metro', minPrice: 1, maxPrice: 20 },
//   { name: 'Bus/Train', minPrice: 1, maxPrice: 100 },
//   { name: 'Plane', minPrice: 1, maxPrice: 200 },
// ]

const documentation = [
  {
    name: 'Car',
    items: ['Gas receipt']
  },
  {
    name: 'Bus/Train',
    items: ['Bus tickets', 'Booking confirmation receipt']
  },
  {
    name: 'Metro',
    items: ['Ticket receipt', 'Transit statement']
  },
  {
    name: 'Plane',
    items: ['Plane tickets', 'Booking confirmation receipt']
  }
]
</script>

<style scoped lang="scss">
.title {
  margin: 3.5rem 0 1.5rem 0;
}

.h3, h3 {
  text-align: center;
  margin-bottom: 1rem;
  color: #ffce64;
  }

.a {
  color: #ffce64;
}

.travel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 90%;
    margin: auto;
    margin-bottom: 3rem;
}

.travel-header {
  text-align: center;
}

.travel-header h2 {
    color: $DARK-PURPLE;
}

.travel-header h4 {
    color: $DARK-PURPLE;
}

.process-blurb {
  text-align: center;
  width: min(81rem, 100%);
  margin: auto;
  margin-top: 2rem;
}

.info-section {
  text-align: center;
}

.email-blurb {
  text-align: center;
}

.email-blurb h3 {
  color: $DARKYELLOW;
}

.faq-section h3 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.faq-section {
  padding-top: 2rem;
}

.contact-blurb {
  margin-bottom: 5rem;
}

template {
  background-color: $CREAM;
}

a {
    color: $DARKYELLOW;
}

li {
  color: white;
}
</style>

<!-- <template>
  <title>Travel</title>
  <Header>Travel</Header>
  <div class="travel-container">
    <div class="travel-header section">
      <Header class="title">Travel Information</Header>
      
      <div class="info">
        <p>At Technica, we understand the importance of making the event accessible to participants from diverse 
        backgrounds, and we are committed to supporting your journey to our hackathon!</p>

        <p>Technica will be hosted at the Reckord Armory, College Park, MD, from 9 AM, Saturday, October 26th 
        to 5 PM, Sunday, October 27th.</p>

        <p>If you wish to receive Travel Accomodations, please apply using the 
        <a href = "https://forms.gle/1SmVpCvQy9eoQWj79">Technica 2024 Travel Accommodations Request Form</a>. More information will be released soon!</p>

        <p>We will confirm travel accommodations in waves for hackers who have registered using the form above. If hackers cannot attend 
        the event in-person, Technica offers a free, virtual environment to interact with fellow hackers 
        online. </p>

        <p>Technica reserves the right to adjust or cancel accommodations at any time, if necessary.</p>

      </div>
    </div>

    <div class="contact">
    <h3 style="color: #653554;">Have Other Questions?</h3>
    <p style="color: #653554;">
      Reach out to
      <a href="mailto:travel@gotechnica.org">travel@gotechnica.org</a>
      and we'll get back to you soon!
    </p>
  </div>
    <StickyButton></StickyButton>
  </div>
</template>

<script setup lang="ts">
const qaList = [
  {
    question: 'How do I apply for travel reimbursement?',
    answer:
      'Eligible hackers will be sent an email detailing reimbursement requirements and steps to follow to receive reimbursement.',
  },
  {
    question: 'Am I eligible for travel reimbursement?',
    answer: 'Please refer to our travel reimbursement policy above.',
  },
  {
    question: 'When does the travel reimbursement request window close?',
    answer:
      'Travel reimbursement requests for bus, train, or plane accommodations will be accepted until 11:59 pm EDT on October 10th, 2023, and requests for car accommodations will be accepted until 11:59 pm EDT on October 14th, 2023.',
  },
  {
    question: 'When will I receive my reimbursement?',
    answer:
      'You will receive your reimbursement via check or Venmo at the end of Technica on Sunday, October 22nd.',
  },
  {
    question: 'How will I be reimbursed?',
    answer:
      'You will be reimbursed via check or Venmo at the end of Technica. You must be present at Technica in person during this time to receive your reimbursement, and we will have a table there to assist you!',
  },
  {
    question: 'How will I get my bus stop and bus tickets?',
    answer:
      'Your stop and bus information will be sent via email. If you elect to travel by bus, an application form will be sent to you via email. Buses will stop at select universities; their exact location and departure time will be confirmed closer to the event.',
  },
  {
    question:
      "I'm eligible travel assistance to Technica but I haven’t received an email yet",
    answer:
      'We will be sending out travel information via email on a rolling basis. If you have registered for Technica and have not received information about travel within a week of registering, please reach out to <a href="mailto:travel@gotechnica.org">travel@gotechnica.org</a> via email with the subject "URGENT - Travel Information Not Received"',
  },
  {
    question: 'How do I choose to either ride a bus or get reimbursed?',
    answer:
      'Emails will be sent out to everyone eligible for travel assistance. Seperate forms for bus, reimbursement, and hotel rooms will be sent.',
  },
  {
    question: 'Is travel assistance guaranteed?',
    answer:
      'No, we suggest registering for Technica as soon as possible to for the best chance to receive travel assistance and hotel rooms.',
  },
];

</script>

<style scoped lang="scss">
.title {
  margin: 3.5rem 0 1.5rem 0;
}

.h3, h3 {
  text-align: center;
  margin-bottom: 1rem;
  color: #ffce64;
  }

  .a {
      color: #ffce64;
  }

.travel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    width: 90%;
    margin: auto;
    margin-bottom: 3rem;
}

.travel-header {
  text-align: center;
}

.travel-header h2 {
    color: $DARK-PURPLE;
}

.travel-header h4 {
    color: $DARK-PURPLE;
}

.process-blurb {
  text-align: left;
  width: min(81rem, 100%);
  margin: auto;
  margin-top: 2rem;
}

.email-blurb {
  text-align: center;
}

.faq-section h3 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.faq-section {
  padding-top: 2rem;
}

.contact-blurb {
  margin-bottom: 5rem;
}

template {
  background-color: $CREAM;
}

a {
    color: $DARK-PURPLE;
}
</style> -->
