<template>
    <title>Travel</title>
    <div class="container">
        <Header class="title">Minors Information</Header>
        <div class="section row">
            <div class="col-md-6 text-block">
                <p>
                    Participants under 18 are welcome to join us for Technica weekend! We have accommodations in place
                    for minors. This includes a minors waiver and a curfew policy for minors detailed below. We will be
                    requiring all in-person participants under 18 to be accompanied by an adult chaperone (anyone 18+)
                    at all times during Technica this year. Chaperones must also be registered as a hacker.
                </p>
            </div>
            <div class="col-md-6 img-container">
                <img class="minor-graphic" src="/minor/minor-graphic.png">
            </div>
        </div>
        <div class="section row">
            <div class="col-md-6 text-block">
                <h3>Minors Waiver</h3>
                <p>Whether participating in person or virtually, a minor’s chaperone must submit Technica’s Minor Waiver
                    for
                    the minor. This waiver is linked <a
                        href="https://drive.google.com/file/u/0/d/1OesK8GFb-V6NWDKceDZ02VNi9kGxKAKP/view?usp=sharing&pli=1"
                        target="_blank"> here</a> and will also be emailed to the hacker’s parent/guardian in
                    early October to sign through Docusign (given that the hacker is registered). The parent/guardian
                    must
                    also attach scans of valid government ID in this Docusign. Only one signed copy of the waiver is
                    required for each minor.</p>
            </div>
            <div class="col-md-6 text-block">
                <h3>Minors Curfew</h3>
                <p>Unfortunately, we are unable to provide overnight options for minors at Technica this year.
                    Participants under the age of 18 will be required to leave Technica premises with their chaperone by
                    10:00 pm on October 26th and may not return before 8:00 am on October 27th. Minors can continue to
                    participate virtually during these hours if they choose. This decision is solely due to liability
                    concerns given the size of our event. </p>
            </div>
        </div>
        <div class="faq-section">
            <Header>Frequently Asked Questions</Header>
            <FAQ faqId="main" :qaList="qaList" class="section" />
        </div>

        <div class="contact section">
            <h3>Have Other Questions?</h3>
            <p>
                Reach out to
                <a href="mailto:travel@gotechnica.org">operations@gotechnica.org</a>
                and we'll get back to you soon!
            </p>
        </div>
        <StickyButton></StickyButton>
    </div>
</template>

<script setup lang="ts">
const qaList = [
    {
        question: 'Where and when is Technica?',
        answer: 'Technica 2024 will take place on October 26-27 in Reckord Armory and Thurgood Marshall Hall at UMD and virtually via our online platform, Gather. You choose how you want to join! In-person check-in will begin at 9 AM on Saturday and the event will conclude at 5 PM on Sunday.'
    },
    {
        question: 'Can minors ride Technica-chartered buses?',
        answer: 'Minors can ride Technica-chartered or -contracted vehicles, though it is advised that minors are accompanied by a chaperone on these vehicles. Please refer to the Minors Waiver for more information.'
    },
    {
        question: 'Do chaperones have to register for Technica?',
        answer: 'Yes, accompanying parents/chaperones must also be registered as a hacker for Technica.'
    },
    {
        question: 'How many minors can a chaperone accompany?',
        answer: 'A single chaperone is allowed to accompany up to 10 minors, but a separate waiver needs to be completed for each minor in the group. Additionally, the parent/guardian must sign off on the waiver, regardless of whether or not they will be accompanying the minor as a chaperone.'
    },
    {
        question: 'Can minors continue to participate virtually during curfew hours?',
        answer:
            'Yes, minors are welcome (and encouraged!) to continue participating virtually on the Gather platform during curfew hours.',
    },
    {
        question: 'How do I submit my signed minors waiver?',
        answer:
            'A Docusign will be emailed to registered hacker’s parent/guardian in early October for signage. A copy of the waiver can be found <a href ="https://drive.google.com/file/u/0/d/1OesK8GFb-V6NWDKceDZ02VNi9kGxKAKP/view?usp=sharing&pli=1" target="_blank">here</a> for early viewing.',
    },
];

</script>

<style scoped lang="scss">
.section {
    margin-top: 3%;
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

.faq-section {
    margin-top: 5%;
}

template {
    background-color: $CREAM;
}

.title {
    margin-top: 5%;
}

.text-block h3, .text-block a {
    color: $LIGHTGREEN;
}

.contact {
    text-align: center;
}

.contact h3,
.contact p {
    color: $DARKPURPLE;
}

.minor-graphic {
    width: 35%;
}

.img-container {
    text-align: center;
}
</style>