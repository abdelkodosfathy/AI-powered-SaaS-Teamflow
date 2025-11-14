import  { ReactNode } from "react";
import { WorkspaceList } from "./_components/WorkspaceList";
import { CreactWorkspace } from "./_components/CreactWorkspace";
import UserNav from "./_components/UserNav";

const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border">
        <WorkspaceList/>
        <div className="mt-4">
          <CreactWorkspace />
        </div>
        <div className="mt-auto">
          <UserNav/>
        </div>
      </div>
      {children}
    </div>
  );
};

export default WorkspaceLayout;
