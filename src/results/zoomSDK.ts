/**
 * Last Updated: 1/21/2025, 3:58:50 PM
 * Version: 0.0.0-dev.1
 */

export const ZOOMSDK_QUERIES_MAP: Record<string, string[]> = {
  // Join button
  "join": [
    "button.zm-btn.preview-join-button",
    "#join-btn"
  ],

  // Prejoin toggle mic button
  "pre-toggle-mic-btn": [
    "#preview-audio-control-button"
  ],

  // Prejoin toggle camera button
  "pre-toggle-camera-btn": [
    "#preview-video-control-button"
  ],

  // Prejoin guest symbol
  "pre-guest-symbol": [],

  // Paid account symbol
  "paid-account-symbol": [],

  // Toggle mic button
  "toggle-mic-btn": [
    "button.join-audio-container__btn",
    "button.join-audio-container--disabled"
  ],

  // Toggle camera button
  "toggle-camera-btn": [
    "button.send-video-container__btn",
    "button.send-video-container--disabled"
  ],

  // Toggle participants button
  "toggle-participants-btn": [
    "[aria-label*='participants list pane']"
  ],

  // Toggle chat button
  "toggle-chat-btn": [
    "[aria-label*='the chat pane']"
  ],

  // Chat input field
  "chat-input": [
    "div.tiptap.ProseMirror > p"
  ],

  // Chat send button
  "chat-send-btn": [
    "button.chat-rtf-box__send"
  ],

  // Leave call button
  "leave-call": [
    "button.footer-button-base__button.ax-outline[aria-label=\"Leave\"]",
    "button.footer-button-base__button.ax-outline[aria-label=\"End\"]"
  ],

  // Hangup more options button
  "hangup-more-options-btn": [
    "button.zmu-btn.footer__leave-btn"
  ],

  // Hangup more leave button
  "hangup-more-leave": [
    "[class=\"zmu-btn leave-meeting-options__btn leave-meeting-options__btn--default zmu-btn--default zmu-btn__outline--white\"][type=\"button\"][role=\"menuitem\"]"
  ],

  // Hangup more end button
  "hangup-more-end": [
    "button.leave-meeting-options__btn--danger[type=\"button\"][role=\"menuitem\"]"
  ],

  // Toggle raise hand button
  "toggle-raise-hand-btn": [
    "button[aria-label=\"Reactions\"]",
    "button.reaction-simple-picker__block--raise-hand"
  ],

  // Toggle captions button
  "toggle-caption-btn": [
    "button[aria-label$=\"Captions\"]"
  ],

  // Toggle screen share button
  "toggle-screen-share-btn": [
    "button.sharer-button--stop",
    "button.sharing-entry-button-container.ax-outline"
  ],

  // React emoji button
  "react-emoji-btn": [
    "button[aria-label=\"Reactions\"]"
  ],

  // React emoji container
  "react-emoji-container": [
    "div.reaction-simple-picker__row"
  ],

  // View mode button
  "view-mode-btn": [
    "button.zm-btn.full-screen-widget__button"
  ],

  // View mode container
  "view-mode-container": [
    "ul.full-screen-widget__pop-menu.dropdown-menu"
  ],

  // Show more button
  "show-more-btn": [
    "#moreButton"
  ],

  // Lobby popup deny button
  "lobby-popup-deny-btn": [],

  // Lobby popup admit button
  "lobby-popup-admit-btn": [
    "button[aria-label=\"View waiting room list\"] + button"
  ],

  // Lobby list item admit button
  "lobby-li-admit-btn": [
    "button.participants-item__margin-right.participants-item__admit-remove"
  ],

  // Lobby list item deny button
  "lobby-li-deny-btn": [
    "button.participants-item__admit-remove.participants-item__remove"
  ],

  // View lobby button
  "view-lobby-btn": [
    "button[aria-label=\"View waiting room list\"]"
  ],

  // Lobby dismiss button
  "lobby-dismiss-btn": [
    "i.notification-message-wrap__close"
  ],

  // Lobby name span
  "lobby-name-span": [
    "span.notification-message-wrap__txt"
  ],

  // Attendees tree
  "attendees-tree": [
    "div.participants-section-container"
  ],

  // People list container
  "people-list-container": [
    "div.participants-section-container"
  ],

  // In-lobby list item
  "in-lobby-li": [
    "[id^=\"waitingRoom-li-\"]"
  ],

  // In-call list item
  "in-call-li": [
    "[id^=\"participants-list-\"]"
  ],

  // Toggle meeting details button
  "toggle-meet-details-btn": [
    "#meeting-info-indication"
  ],

  // Meeting incorrect code div
  "meeting-incorrect-code-div": [],

  // Dialog root
  "dialog-root": [],

  // Participant action button
  "participant-action-btn": [
    "button[aria-label=\"More,menu button\"]"
  ],

  // Participant actions menu
  "participant-actions-menu": [
    "menu.zmu-portal-dropdown__menu-list"
  ],

  // Record buttons
  "record-btns": [
    "button[title=\"Record\"]"
  ],

  // Transcription buttons
  "transcription-btns": [],

  // Rejoin button
  "rejoin-btn": [],

  // Join audio dialog
  "join-audio-dialog": [
    "[class=\"join-dialog\"]"
  ],

  // Waiting room
  "waiting-room": [
    "span[title=\"Host has joined. We've let them know you're here\"]"
  ],

  // Meeting info dialog
  "meeting-info-dialog": [
    "div[class=\"zmu-paper meeting-info-icon__meeting-paper\"]"
  ],

  // Lobby admit all button
  "lobby-admit-all-btn": [
    "button.waiting-room-list-container__admit-all + button"
  ],

  // Mute all button
  "mute-all-btn": [
    ".participants-section-container__participants-footer-bottom > button + button"
  ],

  // Mute participant on entry buttons
  "mute-participant-on-entry-btns": [
    "#particioantHostDropdown",
    "ul[aria-labelledby=\"particioantHostDropdown\"] > li > a"
  ],

  // Security button
  "security-btn": [
    "button[aria-label=\"more security options\"]"
  ],

  // Security menu
  "security-menu": [
    "ul[aria-labelledby=\"securityOptionMenu\"]"
  ],

  // Modal root
  "modal-root": [
    ".zm-modal"
  ],

  // Modal title
  "modal-title": [
    ".zm-modal .zm-modal-body .zm-modal-body-title"
  ],

  // Pause/Resume recording button
  "pause-resume-recording-btn": [
    "button[aria-label=\"Pause recording\"]",
    "button[aria-label=\"Resume recording\"]"
  ],

};