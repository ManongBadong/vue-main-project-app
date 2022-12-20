<template>
    <section>
        <section-card>
            <form @submit.prevent="addRequest()">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" v-model="request.email.val">
                </div>
                <div class="form-control">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" placeholder="Message"
                        v-model="request.message.val"></textarea>
                </div>
                <div class="form-action">
                    <button-card type="submit" mode="primary">Submit</button-card>
                    <button-card type="button" mode="primary" @click="testing">Test</button-card>
                </div>
            </form>
        </section-card>
        <base-dialog :show="alert.hasAlert" :title="alert.alertTitle" @close="close()">
            {{ alert.alertMessage }}
        </base-dialog>
    </section>
</template>

<script>
import SectionCard from '../components/ui/SectionCard.vue';

export default {
    props: ['id'],
    components: {
        SectionCard,
    },
    data() {
        return {
            request: {
                coachId: this.$route.params.id,
                email: {
                    val: '',
                    isValid: true
                },
                message: {
                    val: '',
                    isValid: true
                }
            },
            alert: {
                alertTitle: '',
                hasAlert: false,
                alertMessage: ''
            }
        }
    },
    methods: {
        async addRequest() {
            const request = {
                coachId: this.request.coachId,
                email: this.request.email.val,
                message: this.request.message.val
            }

            await this.$store.dispatch({
                type: 'request/addRequest',
                request
            }).then(data => {
                if (data.status === 200) {
                    this.alertMessage('Success', 'Your blah blah has been successfully sent to the Coach.')
                    this.reset();
                } else if (data.status) {
                    this.alertMessage('Error', 'Bad request.')
                }
            }).catch(err => {
                this.alertMessage('Error', err.message)
            })
        },
        alertMessage(title, message) {
            this.alert.hasAlert = true;
            this.alert.alertTitle = title;
            this.alert.alertMessage = message;
        },
        close() {
            this.alert.hasAlert = false;
            this.alert.alertMessage = '';
        },
        reset() {
            this.request.email.val = '';
            this.request.email.isValid = true;
            this.request.message.val = '';
            this.request.message.isValid = true;
        },
        testing() {
            this.$store.dispatch({
                type: 'request/loadRequests'
            })
        }

    }

}
</script>

<style>

</style>