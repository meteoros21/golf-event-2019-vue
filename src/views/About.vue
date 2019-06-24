<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RoundRecords></RoundRecords>
    <RoundRecords></RoundRecords>
  </div>
</template>

<script>
import RoundRecords from "@/components/RoundRecords"
export default {
  name: 'about',
  components: {RoundRecords}
}
</script>