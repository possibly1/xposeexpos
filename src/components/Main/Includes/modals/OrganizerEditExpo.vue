<template>
  <!-- Create Project Modal -->
  <div class="modal modal-md icon-action-modal modal-hero" v-if="activeModalOverlayToggled === 'OrganizerEditExpoModal'" :class="[ activeModalOverlayToggled === 'OrganizerEditExpoModal' ? 'is-active' : '']">
    <div class="modal-background scaleInCircle"></div>
    <div class="modal-content scaleIn">
      <div class="flex-card simple-shadow">
        <h2 class="dark-text">Edit Expo Info</h2>
        <div class="card-body">
          <div class="has-text-centered">
            <div class="image">
              <img src="assets/images/icons/note.svg">
            </div>
            <div class="help-text has-text-left">Write a note for the team about this task</div>

            <div class="field">
              <div class="control has-icons-left">
                <input class="input is-medium" type="text" placeholder="Note title">
                <span class="icon is-left">
                  <i class="fa fa-sticky-note"></i>
                </span>
              </div>
            </div>

            <div class="columns is-fieldset">
              <div class="column">
                <textarea class="textarea" rows="3" placeholder="Write something relevant"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="button modal-dismiss">Cancel</button>
          <button type="submit" class="button is-modal">Post Note</button>
        </div>
      </div>
    </div>
    <button @click="resetActiveModalOverlay" :class="[ activeModalOverlayToggled === 'OrganizerEditExpoModal' ? 'is-large' : 'is-hidden']" aria-label="close"></button>
  </div>

</template>

<script>
  import { activeModalToggle } from '@/components/Main/Mixins/activeModalToggle.js';
  export default {
    name: 'OrganizerEditExpoModal',
    mixins: [activeModalToggle],
    data() {
      return {};
    }
  };
</script>