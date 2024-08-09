<template>
  <title>Travel</title>
  <div class="travel-container">
    <div class="travel-header section">
      <Header class="title">Travel Information</Header>
      <h3>Technica provides buses or reimbursements for travel fees</h3>
      <p class="process-blurb">
        <b>The Technica opening ceremony will start at 12:00pm EST on Saturday, October 21 and the closing ceremony will
          be at 3:00pm EST
          on Sunday, October 22.</b>
        Eligible hackers who need transportation to Technica will receive more
        information on how to apply for bus seats and travel reimbursements after registering to attend Technica in
        person.
        Your eligibility is determined by your location from your registration
        form responses and is only applicable for hackers in the United States.
        Please read below for more details and to check your eligibility for
        either option. <b>Note: For questions about travel and hotel registration please contact us at
          travel@gotechnica.org
          and not at The Hotel UNLESS you are booking a hotel room yourselves without Technica reimbursement!</b>
      </p>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 section">
        <div class="info-section">
          <h3>Buses</h3>
          <p>
            Technica provides buses to several cities to facilitate travel for
            hackers to and from hackers. Eligible hackers will receive an email
            detailing bus locations and further instructions on how to apply for
            bus transportation. Buses will stop at Towson University, University of Maryland Baltimore County, Johns
            Hopkins University, Stevens Institute of Technology, New Jersey Institute of Technology, Rutgers University,
            Princeton University, University of Pennsylvania, and University of Delaware. Exact locations and departure
            times will be confirmed closer to the event. If we are not providing a bus to a city within 30 minutes of
            you and you are not within 30 minutes of College Park, Maryland, you
            may apply for travel reimbursement. A seperate form for hotel rooms
            will be sent out.
          </p>
        </div>
        <div class="info-section">
          <h3>Reimbursement</h3>
          <p>
            Technica will provide travel reimbursement to hackers who require
            transportation directly to the University of Maryland and are unable
            to travel via buses Technica sends. Reimbursements will be evaluated
            on a case-by-case basis and may not cover the full cost of travel.
            Eligible hackers will be contacted via email with additional
            information on how to apply for reimbursement and hotel rooms.
            <b>Please note that hackers will need to be physically present
              during Technica in order to receive their reimbursement, not
              attending online.</b>
          </p>
        </div>
      </div>
      <div class="faq-section section">
        <Header>Frequently Asked Questions</Header>
        <FAQ faqId="main" :qaList="qaList" class="main-section" />
      </div>
    </div>
    <!-- <div class="email-blurb section">
        <h3>Have Other Questions?</h3>
        <p class="contact-blurb">
          Email us at
          <a href="mailto:travel@gotechnica.org">travel@gotechnica.org</a>
        </p>
      </div> -->

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

.h3,
h3 {
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
</style>