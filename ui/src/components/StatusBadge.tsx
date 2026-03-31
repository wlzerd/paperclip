import { cn } from "../lib/utils";
import { statusBadge, statusBadgeDefault } from "../lib/status-colors";

const STATUS_LABELS_KO: Record<string, string> = {
  active: "활성",
  paused: "일시정지",
  idle: "대기 중",
  running: "실행 중",
  error: "오류",
  pending_approval: "승인 대기",
  terminated: "종료됨",
  backlog: "백로그",
  todo: "할 일",
  in_progress: "진행 중",
  in_review: "검토 중",
  done: "완료",
  cancelled: "취소됨",
  blocked: "차단됨",
  planned: "계획됨",
  achieved: "달성됨",
  completed: "완료됨",
  archived: "보관됨",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0",
        statusBadge[status] ?? statusBadgeDefault
      )}
    >
      {STATUS_LABELS_KO[status] ?? status.replace("_", " ")}
    </span>
  );
}
