import { useGenerateMines } from "../../hooks/generateMines";
import style from "./style.module.css";

export const MinesPage = () => {
  const { mines } = useGenerateMines(10);
  console.log(mines);
  function renderMines(mines: any[]) {
    let listJsx = [];
    let count = 0;
    for (let i = 0; i < mines.length; i++) {
      for (let j = 0; j < mines[i].length; j++) {
        listJsx.push(
          <div  className={style.mine} key={count}>
            <div className={style.mine__type}>{mines[i][j].type}</div>
            <div className={style.mine__value}>{mines[i][j].value}</div>
          </div>
        );
        count++;
      }
    }
    return listJsx;
  }
  return (
    <div>
      <div className={style.header}>
        <select name="count" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <div className="won">200 BTC</div>
      </div>
      <div className={style.mines}>
        {renderMines(mines)}
      </div>
      <div className={style.footer}></div>
    </div>
  )
}