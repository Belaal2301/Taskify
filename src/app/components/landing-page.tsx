"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
// import { toast } from "sonner";

export default function LandingPage() {
  return (
    <div className="border-0 py-24">
      <div className="space-y-24">
        <section>
          <h1 className="font-bold text-4xl text-center">Taskify</h1>
          <p className="indent-8 text-justify text-xl">
            Taskify is designed for individuals, small teams and organizations
            across various industries. It caters to professionals, student,
            freelancers, and anyone seeking and effective task management
            solutions. Whether you are a project manager, a student working on
            assignments or a freelancer managing multiple clients, Taskify will
            streamline your workflow and improve task organization.
          </p>
        </section>
        <Features />
        <GetStarted />
      </div>
    </div>
  );
}

function GetStarted() {
  const router = useRouter();
  return (
    <section className="text-center">
      <Button
        className=""
        color="primary"
        size="lg"
        onClick={() => router.push("/login")}
      >
        Get started
      </Button>
    </section>
  );
}

function Features() {
  return (
    <section>
      <h1 className="font-bold text-4xl text-center">Features</h1>
      <ul className="list-disc space-y-4">
        <li>
          <h3 className="text-2xl font-semibold flex">
            Task Organization:
            <p className="text-base font-normal py-1.5">
              &nbsp; Create, organize, and prioritize tasks.
            </p>
          </h3>
        </li>
        <li>
          <h3 className="text-2xl font-semibold flex">
            Collaboration:
            <p className="text-base font-normal py-1.5">
              &nbsp; Share tasks and projects with team members.
            </p>
          </h3>
        </li>
        <li>
          <h3 className="text-[23px] font-semibold flex">
            Reminders & Notifications:
            <p className="text-base font-normal py-1.5">
              &nbsp; Stay on track with timely reminders and notifications.
            </p>
          </h3>
        </li>
        <li>
          <h3 className="text-2xl font-semibold flex">
            Progress Tracking:
            <p className="text-base font-normal py-1.5">
              &nbsp; Visual progress tracker.
            </p>
          </h3>
        </li>
      </ul>
    </section>
  );
}
