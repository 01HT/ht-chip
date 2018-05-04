"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";
import "@polymer/iron-icon";
class HTElementsChip extends LitElement {
  render({ label, close, shadow }) {
    return html`
      <style>
        :host {
          display: block;
          position:relative;
          box-sizing:border-box;
        }

        iron-icon {
          --iron-icon-height: 18px;
          --iron-icon-width: 18px;
          position: relative;
          color:#A6A6A6;
          border-radius: 50%;
          cursor: pointer;
          margin-right: -4px;
        }

        #container{
          max-width: 276px;
          background:#fff;
          font-size: 13px;
          color: rgba(0, 0, 0, 0.87);
          background: #fff;
          border-radius: 16px;
          height:32px;
          position:relative;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          padding: 0 4px 0 12px;
          align-items: center;
          box-shadow: ${
            shadow
              ? "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);"
              : "none"
          };
        }

        #container:hover {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        #label {
          margin-right: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        ::slotted(#chip-image) {
          margin: 0 8px 0 0;
          width:32px;
          height:32px;
        }

        ::slotted(#chip-background) {
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius: 50%;
          background: #A6A6A6;
          --iron-icon-height: 19px;
          --iron-icon-width: 19px;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          margin: 0 8px 0 -12px;
          width:32px;
          height:32px;
        }

        [hidden] {
          display:none;
        }
      </style>
      <iron-iconset-svg size="24" name="ht-chip-icons">
        <svg>
          <defs>
            <g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
          </defs>
        </svg>
      </iron-iconset-svg>
      <div id="container">
        <slot name="avatar"></slot>
        <div id="label">${label}</div>
        <iron-icon icon="ht-chip-icons:cancel" hidden?=${
          close ? false : true
        } on-click=${e => {
      this._close();
    }}></iron-icon>
      </div>
`;
  }

  static get is() {
    return "ht-chip";
  }

  static get properties() {
    return {
      label: String,
      close: Boolean,
      shadow: Boolean
    };
  }

  _close(e) {
    this.shadowRoot.dispatchEvent(
      new CustomEvent("close-chip", {
        bubbles: true,
        composed: true,
        detail: ""
      })
    );
  }
}

customElements.define(HTElementsChip.is, HTElementsChip);
