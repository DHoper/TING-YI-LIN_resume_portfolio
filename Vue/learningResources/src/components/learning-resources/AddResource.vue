<template>
    <BaseDialog v-if="inputValidity" title="無效的輸入" @closeError="confirmError">
    <template #default>
        <p>請輸入有效資訊。</p>
    </template>
    <template #actions>
        <BaseButton @click="confirmError">確認</BaseButton>
    </template>
</BaseDialog>
    <BaseCard>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">標題</label>
                <input type="text" id="title" name="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="url">網址</label>
                <input type="url" id="url" name="url" ref="urlInput"> 
            </div>
            <div class="form-control">
                <label for="description">描述</label>
                <textarea name="description" id="description" rows="3" ref="descriptionInput"></textarea>
            </div>
            <div>
                <BaseButton>添加資源</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputValidity: false,
        }
    },
    methods: {
        submitData() {
            const enterTitle = this.$refs.titleInput.value;
            const enterDescription = this.$refs.descriptionInput.value;
            const enterUrl = this.$refs.urlInput.value;

            if(enterTitle.trim() === "" || enterDescription.trim() === "" || enterUrl.trim() === "") {
                this.inputValidity = true;
                return;
            };
            this.addResource(enterTitle, enterDescription, enterUrl);
        },
        confirmError() {
            this.inputValidity = false;
        },
    }
}</script>

<style scoped>
    form {
        width: 75%;
    }
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>