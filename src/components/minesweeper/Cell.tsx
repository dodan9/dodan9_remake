import { MINE } from ".";

const Cell = ({
  value,
  onClick,
  isEnd,
  onContextMenu,
}: {
  value: number;
  onClick: () => void;
  isEnd: boolean;
  onContextMenu: (
    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => void;
}) => {
  if (value === -3)
    // 깃발 세운 땅
    return (
      <td
        style={{
          width: "30px",
          height: "30px",
          textAlign: "center",
          border: "1px solid #ccc",
          backgroundColor: "#ccc",
          color: "black",
        }}
      >
        flag
      </td>
    );

  if ((value === 0 || value === -1) && !isEnd)
    // 아직 안 열었을 떄
    return (
      <td
        style={{
          width: "30px",
          height: "30px",
          textAlign: "center",
          border: "1px solid #ccc",
          backgroundColor: "#ccc",
          cursor: "pointer",
        }}
        onClick={onClick}
        onContextMenu={onContextMenu}
      ></td>
    );

  if (value === -2 || (value === 0 && isEnd))
    // 열었는데 빈 땅
    return (
      <td
        style={{
          width: "30px",
          height: "30px",
          textAlign: "center",
          border: "1px solid #ccc",
        }}
      ></td>
    );

  return (
    // 열었는데 숫자
    <td
      style={{
        width: "30px",
        height: "30px",
        textAlign: "center",
        border: "1px solid #ccc",
      }}
      onClick={onClick}
    >
      {value === MINE ? "*" : value}
    </td>
  );
};

export default Cell;
