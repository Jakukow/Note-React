import { nanoid } from "@reduxjs/toolkit";

export class Note {
  constructor(title, text, html, icon_category) {
    (this.title = title),
      (this.text = text),
      (this.html = html),
      (this.icon_category = icon_category),
      //(this.date = new Date().toISOString),
      (this.id = nanoid());
  }
}
