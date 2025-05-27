<template>
    <div class="container">
        <div class="box">
        <Header class=heading>Co-Execs</Header>
        <div class="row">
            <div class="col name">
                <h3>Jasmine Emeruwa</h3>
            </div>
            <div class="col name">
                <h3>Serena Huang</h3>
            </div>
        </div>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Directors</Header>
        <div class="row">
            <div class="col name">
                <h3>Floricel Buencamino</h3>
                <h3>Tracy Anne Tan</h3>
                <h3>Faith Comising</h3>
                <h3>Michelle Yu</h3>
                <h3>Julie Lin</h3>
                <h3>Aditi Sethi</h3>
                <h3>Meenakshi Rama Subramaniane</h3>
            </div>
            <div class="col name">
                <h3>Joanne Lee</h3>
                <h3>Breanna Pompey</h3>
                <h3>Victoria Anaele-Nwogu</h3>
                <h3>Helena Tesfaye</h3>
                <h3>Claire Chen</h3>
                <h3>Madeline Moldrem</h3>
                <h3>Valentina Hong</h3>
                <h3>Brian Xie</h3>
            </div>
        </div>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Brand</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Design</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Events</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Experience</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Inclusive Communities</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Operations</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Outreach</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Sponsorship</Header>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <Header class=heading>Tech</Header>
        </div>
    </div>

</template>
<script>
</script>

<style scoped>

.h3 {
    text-align: center;
}

.heading {
  margin-bottom: 2rem;
}

.box {
  background-color: rgba(56, 104, 62, 0.2);
  padding: 2rem;
  border-radius: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.row {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
}

.col {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.name {
    color: white;
}
</style>