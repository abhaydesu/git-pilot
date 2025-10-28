import { Check, Cog, GitBranch, Lightbulb, Shield, Undo } from "lucide-react";
import React from "react";

export const Supercharge = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto text-center">
        <h2
  className="
    text-3xl md:text-5xl font-semibold text-white mb-16 font-satoshi
    max-w-4xl mx-auto py-4 px-1
    rounded-lg
    border border-white/10
    bg-neutral-900/70
    bg-[image:radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]
    bg-[size:8px_8px]
    shadow-inner shadow-black/20
    transition-all duration-300
    hover:border-white/20
    hover:shadow-lg
    hover:-translate-y-px
  "
>
  <span className="font-array md:text-6xl">Supercharge </span>Your Git
  Workflow
</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-neutral-900 border border-neutral-800">
            <div
              className="rounded-xl border group border-neutral-800 bg-neutral-950 p-6 md:p-8 m-2 shadow-2xl
                       flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold text-neutral-100 mb-4 group-hover:translate-y-1 transition-all duration-300">
                AI Commits
              </h3>
              <p className="text-neutral-400 mb-6 group-hover:-translate-y-1 transition-all duration-300">
                Generate conventional commit messages from your staged changes,
                with or without an intent.
              </p>
              <div className="w-full space-y-4  mt-4 text-left">
                <div className="bg-neutral-900 border group-hover:-translate-y-1 border-neutral-800 p-3 rounded-lg text-neutral-300 hover:scale-102 hover:text-white transition-all duration-300  flex flex-row justify-start items-center">
                  <span className="mr-2">
                    <Lightbulb height={17} width={17} />
                  </span>{" "}
                  Commit from Diff
                </div>
                <div className="bg-neutral-900 border group-hover:-translate-y-1 border-neutral-800 p-3 rounded-lg text-neutral-300 hover:scale-102 hover:text-white transition-all duration-300  flex flex-row justify-start items-center">
                  <span className="mr-2">
                    <Cog height={17} width={17} />
                  </span>{" "}
                  Commit with Intent
                </div>
                <div className="bg-neutral-900 border group-hover:-translate-y-1 border-neutral-800 p-3 rounded-lg text-neutral-300 hover:scale-102 hover:text-white transition-all duration-300  flex flex-row justify-start items-center">
                  <span className="mr-2 ">
                    <Check height={17} width={17} />
                  </span>{" "}
                  Accept, Edit, or Abort
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800">
            <div
              className="group rounded-xl border border-neutral-800 bg-neutral-950 p-6 md:p-8 md:pb-9 shadow-2xl
                       flex flex-col items-center text-center m-2 "
            >
              <h3 className="text-2xl font-semibold text-neutral-100 mb-4 group-hover:translate-y-1 transition-all duration-300">
                AI Commands
              </h3>
              <p className="text-neutral-400 mb-6 group-hover:-translate-y-1 transition-all duration-300">
                Translate plain English into precise, safe Git commands.
              </p>
              <div
                className="relative w-48 h-48 rounded-full bg-neutral-900 flex items-center justify-center 
                            border border-neutral-200/30"
              >
                <div className="absolute w-full h-full rounded-full border border-dashed border-neutral-700 animate-spin-slow"></div>
                <div className="text-3xl text-neutral-100 font-array font-semibold group-hover:text-4xl transition-all duration-">
                  Git <br /> Pilot
                </div>
                <div className="group-hover:scale-103 group-hover:rotate-6 transition-all duration-300 hover:text-white absolute top-4 -right-2 bg-neutral-800 border border-neutral-700 py-1 px-2 rounded-full text-sm text-neutral-300">
                  git pull
                </div>
                <div className="group-hover:scale-103 group-hover:rotate-12 hover:text-white transition-all duration-300 absolute bottom-19 -left-8 bg-neutral-800 border border-neutral-700 py-1 px-2 rounded-full text-sm text-neutral-300">
                  git reset
                </div>
                <div className="group-hover:scale-103 group-hover:-rotate-3 hover:text-white transition-all duration-300 absolute bottom-2 -right-0 bg-neutral-800 border border-neutral-700 py-1 px-2 rounded-full text-sm text-neutral-300">
                  git branch
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800">
            <div
              className="rounded-xl group border border-neutral-800 bg-neutral-950 p-6 md:p-8 md:pb-10 shadow-2xl
                       flex flex-col items-center text-center m-2"
            >
              <h3 className="text-2xl font-semibold text-neutral-100 mb-4 group-hover:translate-y-1 transition-all duration-300">
                Smart Utilities
              </h3>
              <p className="text-neutral-400 mb-8 group-hover:-translate-y-1 transition-all duration-300">
                Maintain a clean and consistent repository with intelligent
                suggestions.
              </p>
              <div className="w-full space-y-4 text-left">
                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-neutral-300 hover:text-white hover:scale-102 transition-all duration-300  flex flex-row justify-start items-center group-hover:-translate-y-1">
                  <span className="mr-2">
                    <GitBranch />
                  </span>{" "}
                  Generate Branch Name
                </div>
                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-neutral-300 hover:text-white hover:scale-102 transition-all duration-300  flex flex-row justify-start items-center group-hover:-translate-y-1">
                  <span className="mr-2">
                    <Undo />
                  </span>{" "}
                  Undo Last Action
                </div>
                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-neutral-300 hover:text-white hover:scale-102 transition-all duration-300  flex flex-row justify-start items-center group-hover:-translate-y-1">
                  <span className="mr-2">
                    <Shield />
                  </span>{" "}
                  Safe and Interactive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
