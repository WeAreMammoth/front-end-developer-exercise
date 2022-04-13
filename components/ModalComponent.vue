<template>
    <div>
        <b-modal :id="id" :title="title">
           <slot></slot>
        </b-modal>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        }
    },
    data(){
        return {}
    }
}
</script>