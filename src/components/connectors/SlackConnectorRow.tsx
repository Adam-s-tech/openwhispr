import type { ReactElement } from "react";
import { MessageSquare } from "../icons";
import { ConnectorLoginRow } from "./ConnectorLoginRow";
import type { ConnectorStatus } from "../../types/connectors";

interface SlackConnectorRowProps {
  isPaid: boolean;
  blockedByOrg: boolean;
  onUpgrade: () => void;
}

const slackAccountSummary = (status: ConnectorStatus): Record<string, string> => ({
  account: status.accountLabel ?? "",
  workspace: status.workspaceLabel ?? "",
});

export function SlackConnectorRow({
  isPaid,
  blockedByOrg,
  onUpgrade,
}: SlackConnectorRowProps): ReactElement | null {
  return (
    <ConnectorLoginRow
      connectorId="slack"
      isPaid={isPaid}
      blockedByOrg={blockedByOrg}
      onUpgrade={onUpgrade}
      accountSummary={slackAccountSummary}
      icon={<MessageSquare className="w-4 h-4 text-primary" aria-hidden="true" />}
    />
  );
}
