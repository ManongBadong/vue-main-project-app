<template>
    <section>
        <section-card>
            <h2>Coach Registration</h2>
            <hr>
            <form @submit.prevent="addCoach()">
                <div class="form-control">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" v-model.trim="coach.name.val">
                </div>

                <div class="form-control">
                    <label for="rate">Rate</label>
                    <input type="text" id="rate" name="rate" placeholder="Rate" v-model.number="coach.rate.val">
                </div>

                <div class="form-control">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" placeholder="Description" rows="10"
                        v-model.trim="coach.description.val"></textarea>
                </div>

                <div class="form-control">
                    <div>
                        <input type="checkbox" id="frontend" value="frontend" v-model="coach.areas.val" />
                        <label for="frontend">Frontend Development</label>
                    </div>
                    <div>
                        <input type="checkbox" id="backend" value="backend" v-model="coach.areas.val" />
                        <label for="backend">Backend Development</label>
                    </div>
                    <div>
                        <input type="checkbox" id="career" value="career" v-model="coach.areas.val" />
                        <label for="career">Career Advisory</label>
                    </div>
                </div>
                <div class="form-action">
                    <button-card type="submit" mode="primary">Submit</button-card>
                </div>
            </form>
        </section-card>
    </section>
</template>

<script>

export default {
    data() {
        return {
            coach: {
                name: {
                    val: '',
                    isValid: true
                },
                rate: {
                    val: '',
                    isValid: true
                },
                description: {
                    val: '',
                    isValid: true
                },
                areas: {
                    val: [],
                    isValid: true
                }
            }
        }
    },
    methods: {
        async addCoach() {
            let id = Date.now();
            const coach = {
                id: id,
                name: this.coach.name.val,
                rate: this.coach.rate.val,
                description: this.coach.description.val,
                types: this.coach.areas.val
            }

            await this.$store.dispatch({
                type: 'coach/addCoaches',
                coach
            })
        }
    }
}
</script>

<style scoped>

</style>