<!-- Usage Example -->
<!-- <template>
    <div>
      <button @click="showModal = true">Open Modal</button>
      <Modal :isVisible="showModal" @update:isVisible="showModal = $event" @confirm="handleConfirm">
        <p>This is the modal body content.</p>
      </Modal>
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue'; // Adjust the path as needed
  
  export default {
    components: {
      Modal,
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      handleConfirm() {
        console.log('Confirmed!');
      },
    },
  };
  </script> -->

<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <header class="modal-header">
                <h3>{{ title }}</h3>
                <button class="close-button" @click="closeModal">✖</button>
            </header>
            <main class="modal-body">
                <slot></slot>
            </main>
            <footer class="modal-footer">
                <button class="cancel-button" @click="closeModal">Cancel</button>
                <button class="confirm-button" @click="confirmAction">Confirm</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: {
            type: String,
            default: 'Modal Title',
        },
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('update:isVisible', false);
        },
        confirmAction() {
            this.$emit('confirm');
            this.closeModal();
        },
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    border-radius: 8px;
    padding: 20px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 1.5em;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.cancel-button,
.confirm-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.cancel-button {
    background: lightgray;
}

.confirm-button {
    background: #007bff;
    color: white;
}
</style>