"use client";

import {
  Dropdown,
  DropdownTrigger,
  User,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="border-0 my-2 mx-3 flex justify-between py-4">
      <div>
        <h1
          className="pl-8 font-extrabold text-4xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          Taskify
        </h1>
      </div>
      <Dropdown placement="bottom-start" backdrop="blur">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description="@user1"
            name="User One"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@user1</p>
          </DropdownItem>
          <DropdownItem key="home" onClick={() => router.push("/")}>
            Home
          </DropdownItem>
          <DropdownItem key="tasks" onClick={() => router.push("/tasks")}>
            New Task
          </DropdownItem>
          <DropdownItem key="tasks" onClick={() => router.push("/tasks")}>
            Manage Task
          </DropdownItem>
          <DropdownItem key="tasks" onClick={() => router.push("/tasks")}>
            My Team
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
