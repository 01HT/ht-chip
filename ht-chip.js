"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";
import "@polymer/iron-icon";

class HTElementsChip extends LitElement {
  render() {
    const { label, close, shadow } = this;
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
          margin-left:8px;
        }

        #container {
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
          padding: 0 12px 0 12px;
          align-items: center;
        }

        #container:hover {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        #label {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

         ::slotted(div) {
          display:flex;
          align-items:center; 
          justify-content:center;
          --iron-icon-height: 18px; 
          --iron-icon-width: 18px;
         }

        :host([full]) #container {
          padding: 0 12px 0 0;
        }

        :host([full]) ::slotted(div) {
          margin-right: 8px;
          width:32px;
          height:32px;
        }

        :host([image]) #container {
          padding: 0 12px 0 8px;
        }

        :host([image]) ::slotted(div) {
            display: flex;
            width:18px;
            height:18px;
            margin-right:8px;
        }

        :host([icon]) #container {
          padding: 0 12px 0 4px;
        }

        :host([icon]) ::slotted(div)  {
          border-radius: 50%;
          background: #A6A6A6;
          color: #ffffff;
          font-weight: 700;
          font-size: 16px;
          margin-right:8px;
          width:24px;
          height:24px;
        }

        :host([close]) #container { 
          padding-right: 8px;
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
      <div id="container" style="${
        shadow || shadow === ""
          ? "box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);"
          : ""
      }">
        <slot name="avatar"></slot>
        <div id="label">${label}</div>
        <iron-icon icon="ht-chip-icons:cancel" ?hidden=${!close} @click=${e => {
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
      label: { type: String },
      close: { type: Boolean },
      shadow: { type: Boolean }
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
