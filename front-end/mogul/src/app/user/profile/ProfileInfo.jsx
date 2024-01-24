"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ProfileInfo() {
  return (
    <div>
      <div>ID(이메일/수정불가)</div>
      <div class="mt-5">닉네임(수정가능)</div>
    </div>
  );
}
