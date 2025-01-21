/**
 * Last Updated: 1/21/2025, 3:58:50 PM
 * Version: 0.0.0-dev.1
 */

import { IGMeetQKeys } from "../../schema/queryKeys";

export const GMEET_QUERIES_MAP: Record<IGMeetQKeys, string[]> = {
  // Join button
  "join": [
    "button[jsname=\"Qx7uuf\"]",
    "button.IyLmn[jscontroller=\"O626Fe\"]"
  ],

  // Rejoin button
  "rejoin-btn": [
    "button[jsname=\"oI7Fj\"]"
  ],

  // Prejoin stage toggle camera
  "pre-toggle-camera-btn": [
    "div[jsname=\"R3GXJb\"] div[jsname=\"BOHaEe\"]",
    "div[jsname=\"R3GXJb\"] div[jsname=\"psRWwc\"]"
  ],

  // Prejoin stage toggle mic
  "pre-toggle-mic-btn": [
    "div[jsname=\"Dg9Wp\"] div[jsname=\"BOHaEe\"]",
    "div[jsname=\"Dg9Wp\"] div[jsname=\"hw0c9\"]"
  ],

  // Guest symbol
  "pre-guest-symbol": [
    "input[jsname=\"YPqjbf\"]"
  ],

  // Paid account symbol
  "paid-account-symbol": [],

  // InMeeting toggle mic
  "toggle-mic-btn": [
    "div[jsname=\"Dg9Wp\"] button[jsname=\"BOHaEe\"]",
    "div[jsname=\"Dg9Wp\"] button[jsname=\"hw0c9\"]"
  ],

  // InMeeting toggle camera
  "toggle-camera-btn": [
    "div[jsname=\"R3GXJb\"] button[jsname=\"BOHaEe\"]",
    "div[jsname=\"R3GXJb\"] button[jsname=\"psRWwc\"]"
  ],

  // InMeeting toggle participants
  "toggle-participants-btn": [
    "div[class=\"r6xAKc\"] button[data-panel-id=\"1\"][jsname=\"A5il2e\"]"
  ],

  // InMeeting toggle chat
  "toggle-chat-btn": [
    "div[class=\"r6xAKc\"] button[data-panel-id=\"2\"][jsname=\"A5il2e\"]"
  ],

  // Chat input field
  "chat-input": [
    "textarea[jsname=\"YPqjbf\"]"
  ],

  // Chat send button
  "chat-send-btn": [
    "button[jsname=\"SoqoBf\"]"
  ],

  // People list container
  "people-list-container": [
    "div[jsname=\"OmTKLc\"] div[data-panel-id=\"1\"]"
  ],

  // In-lobby participant item
  "in-lobby-p-item": [
    "div[class=\"AE8xFb OrqRRb qG9pmc\"] > div[class=\"cxdMu\"]"
  ],

  // In-meeting participant item
  "in-meeting-p-item": [
    "div[class=\"cxdMu KV1GEc\"]"
  ],

  // Leave call button
  "leave-call": [
    "button[jsname=\"CQylAd\"]"
  ],

  // Hangup more options button
  "hangup-more-options-btn": [],

  // Hangup more end button
  "hangup-more-end": [],

  // Hangup more leave button
  "hangup-more-leave": [],

  // Toggle raise hand button
  "toggle-raise-hand-btn": [
    "button[jsname=\"FpSaz\"]"
  ],

  // Toggle caption button
  "toggle-caption-btn": [
    "button[jsname=\"r8qRAd\"]"
  ],

  // Toggle meet details button
  "toggle-meet-details-btn": [
    "div[class=\"jsNRx\"] button[data-panel-id=\"5\"]"
  ],

  // Toggle screen share button
  "toggle-screen-share-btn": [
    "button[jsname=\"hNGZQc\"]"
  ],

  // React emoji button
  "react-emoji-btn": [
    "button[jsname=\"G0pghc\"]"
  ],

  // React emoji container
  "react-emoji-container": [
    "div[jsname=\"me23c\"]"
  ],

  // View mode button
  "view-mode-btn": [
    "li[jsname=\"WZerud\"]"
  ],

  // View mode container
  "view-mode-container": [
    "div[jsname=\"i07d3e\"] div[role=\"radiogroup\"]"
  ],

  // Close change layout button
  "close-change-layout-btn": [
    "div[class=\"VfPpkd-oclYLd\"] button[jscontroller=\"soHxf\"]"
  ],

  // Lobby list item admit button
  "lobby-li-admit-btn": [],

  // Lobby list item deny button
  "lobby-li-deny-btn": [],

  // Lobby popup admit button
  "lobby-popup-admit-btn": [],

  // Lobby popup deny button
  "lobby-popup-deny-btn": [],

  // Lobby dismiss button
  "lobby-dismiss-btn": [],

  // Lobby name span
  "lobby-name-span": [],

  // Lobby buttons container
  "lobby-btns-container": [
    "div[class=\"yVZq4d\"]"
  ],

  // Lobby title
  "lobby-title": [
    "[class=\"SEdvle\"]"
  ],

  // Lobby view button
  "lobby-view-btn": [],

  // Deny all button
  "deny-all-btn": [
    "button[jsname=\"Xnlwjb\"]"
  ],

  // Admit all button
  "admit-all-btn": [
    "button[jsname=\"ykjzed\"]"
  ],

  // Dialog root
  "dialog-root": [
    "div[class=\"VfPpkd-wzTsW\"] div[role=\"dialog\"]",
    "div[jscontroller=\"dGzwdb\"][class^=\"uW2Fw-Sx9Kwc\"] div[role=\"dialog\"]"
  ],

  // Dialog title
  "dialog-title": [
    "span[jsname=\"MdSI6d\"]",
    "div[role=\"heading\"]"
  ],

  // Show more button
  "show-more-btn": [
    "button[jsname=\"NakZHc\"]"
  ],

  // Meeting incorrect code div
  "meeting-incorrect-code-div": [
    "div[data-startup-code=\"217\"]"
  ],

  // Toggle host control button
  "toggle-host-control-btn": [
    "div[class=\"r6xAKc\"] button[data-panel-id=\"16\"][jsname=\"A5il2e\"]"
  ],

  // Settings button
  "settings-btn": [
    "li[jsname='dq27Te']"
  ],

  // Settings dialog root
  "settings-dialog-root": [
    "div[jscontroller=\"ZakeSe\"]"
  ],

  // More options menu root
  "more-options-menu-root": [
    "div[jscontroller=\"bZ0mod\"][data-menu-uid^=\"ucc-\"]"
  ],

  // Noise cancellation button
  "noise-cancel-btn": [
    "button[aria-label=\"Noise cancellation\"]"
  ],

  // Stop screen share button
  "stop-screen-share-btn": [
    "button[jsname=\"aK5XXd\"]"
  ],

};