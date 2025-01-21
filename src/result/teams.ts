export const TEAMS_QUERIES_MAP: Record<string, string[]> = {
  // Join button
  "join": [
    "#prejoin-join-button"
  ],

  // Prejoin mic state
  "pre-mic": [
    "#calling-prejoin-mic-state-id + div"
  ],

  // Prejoin camera state
  "pre-camera": [
    "#calling-prejoin-camera-state-id + div"
  ],

  // Prejoin guest symbol
  "pre-guest-symbol": [
    "input[data-tid=\"prejoin-display-name-input\"]"
  ],

  // Paid account symbol
  "paid-account-symbol": [
    "div[role=\"radiogroup\"][aria-label=\"Audio options\"]"
  ],

  // Microphone button
  "mic": [
    "#microphone-button"
  ],

  // Camera button
  "camera": [
    "#video-button"
  ],

  // Screen share button
  "screen-share": [
    "#share-button"
  ],

  // Leave call button
  "leave-call": [
    "[aria-label='Leave (Ctrl+Shift+H)']",
    "[aria-label='Leave (⌘+Shift+H)']"
  ],

  // Hangup more options button
  "hangup-more-options-btn": [
    "[data-tid=\"hangup-toggle-more-options-btn\"]"
  ],

  // Hangup more leave button
  "hangup-more-leave": [
    "[data-tid=\"hangup-leave-call-btn\"]"
  ],

  // Hangup more end button
  "hangup-more-end": [
    "[data-tid=\"hangup-end-meeting-btn\"]",
    "button[data-tid=\"endCallConfirmationBtn\"]"
  ],

  // Participants button
  "participants": [
    "#roster-button"
  ],

  // Chat button
  "chat": [
    "#chat-button"
  ],

  // Raise hand button
  "raise-hand": [
    "#raisehands-button"
  ],

  // React emoji button
  "react-emoji-btn": [
    "#reaction-menu-button"
  ],

  // React emoji container
  "react-emoji-container": [
    "[data-tid=\"reactions-popup\"]"
  ],

  // View mode button
  "view-mode-btn": [
    "#view-mode-button"
  ],

  // View mode container
  "view-mode-container": [
    "[data-tid=\"view-mode-button-menu\"]"
  ],

  // Live captions buttons
  "live-captions-btns": [
    "#callingButtons-showMoreBtn",
    "[aria-label=\"Language and speech\"]",
    "#closed-captions-button",
    "button[data-tid=\"calling_captions_change_language_dialog_confirm_button\"]"
  ],

  // Show more button
  "show-more-btn": [
    "#callingButtons-showMoreBtn"
  ],

  // Lobby popup admit button
  "lobby-popup-admit-btn": [
    "[data-tid=\"lobby-popup-admit-btn\"]"
  ],

  // Lobby popup deny button
  "lobby-popup-deny-btn": [
    "[data-tid=\"lobby-popup-deny-btn\"]"
  ],

  // Lobby list item admit button
  "lobby-li-admit-btn": [
    "button[data-cid=\"roster-admit-participant\"]"
  ],

  // Lobby list item deny button
  "lobby-li-deny-btn": [
    "button[data-cid=\"roster-deny-participant\"]"
  ],

  // View lobby button
  "view-lobby-btn": [
    "button[title=\"View Lobby\"]"
  ],

  // Lobby dismiss button
  "lobby-dismiss-btn": [
    "[data-tid=\"callingAlertDismissButton_lobby\"]"
  ],

  // Lobby name span
  "lobby-name-span": [
    "span[data-tid^=\"participants-in-lobby\"]"
  ],

  // Attendees tree
  "attendees-tree": [
    "div[aria-label=\"Attendees\"][role=\"tree\"]"
  ],

  // In-lobby list item
  "in-lobby-li": [
    "li[data-tid^=\"participantsInLobby-\"]"
  ],

  // In-call list item
  "in-call-li": [
    "li[data-tid^=\"participantsInCall-\"]",
    "li[data-tid^=\"attendeesInMeeting-\"]"
  ],

  // Participant action button
  "participant-action-btn": [
    "button[data-cid=\"ts-participant-action-button\"]"
  ],

  // Participant actions menu
  "participant-actions-menu": [
    "[data-tid=\"participant-actions-menu\"]"
  ],

  // Chat input field
  "chat-input": [
    "div[data-tid=\"ckeditor\"][role=\"textbox\"] > p"
  ],

  // Chat send button
  "chat-send-btn": [
    "button[data-tid=\"newMessageCommands-send\"]"
  ],

  // Record buttons
  "record-btns": [
    "button[aria-label=\"Record and transcribe\"]",
    "#recording-button",
    "button[data-tid=\"stopRecordingConfirmationStopBtn\"]"
  ],

  // Transcription buttons
  "transcription-btns": [
    "button[aria-label=\"Record and transcribe\"]",
    "#call-transcript-button"
  ],

  // Modal root
  "modal-root": [],

  // Modal title
  "modal-title": [],

  // Rejoin button
  "rejoin-btn": [],

  // Meeting incorrect code div
  "meeting-incorrect-code-div": [],

  // Popup screen share button
  "popup-screen-share-btn": [
    "[data-tid=\"share-screen-window-or-tab\"]"
  ],

  // Meeting info button
  "meeting-info-btn": [
    "#meeting-info-button"
  ],

  // Confirm spotlight button
  "confirm-spotlight-button": [
    "[data-tid=\"confirm-spotlight-change-button\"]"
  ],

  // Confirm role button
  "confirm-role-button": [
    "[data-tid=\"confirm-role-change-button\"]"
  ],

};