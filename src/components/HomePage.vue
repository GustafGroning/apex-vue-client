<template> 
    <div>
        <p> Hello World!</p>
        <RouterLink 
            to="/task/add"
            custom
            v-slot="{ navigate }"
            >
            <button 
            @click="navigate"
            role="link">
            Create new task
            </button>
        </RouterLink>
    </div>
</template>

<script>
// add imports here
// import axios from 'axios';

export default {
    data() {
        return {
            // Fill with neccecary vars
        };
    },
    async created() {
        try {
            console.log('success!');
            // this.$router.push('/testPage');
        } catch (error) {
            console.log(error);
        }
    },
}

</script>