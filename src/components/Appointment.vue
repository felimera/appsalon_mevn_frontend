<script setup>
defineProps({
    appointment: {
        type: Object
    }
});
</script>

<template>
    <div>
        <p>{{ appointment }}</p>
    </div>
</template>

