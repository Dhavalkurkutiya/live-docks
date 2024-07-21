import CollaborativeRoom from "@/components/CollaborativeRoom";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Document = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="collaborative-room">
        <Header>
          <div className="flex w-fit items-center justify-center gap-2">
            <p className="document-title">This fake document title</p>
          </div>
          <SignedOut>
            {" "}
            <SignInButton />{" "}
          </SignedOut>{" "}
          <SignedIn>
            {" "}
            <UserButton />{" "}
          </SignedIn>
        </Header>
        <Editor />
      </div>
    </main>
  );
};

export default Document;
