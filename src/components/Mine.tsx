import { MineType } from "../quote.type";
import Table from "react-bootstrap/Table";

interface MineProps {
  mine: any;
}

function Mine(props: MineProps) {
  const renderMain = (mine: any) => {
    return mine?.map((el: any, key: number) => {
      return (
        <tr key={key}>
          <td className="centered">{key + 1}</td>
          <td>{el[key + 1]}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="centered">#</th>
            <th style={{ fontWeight: "bold", textAlign: "center" }}>Lessons</th>
          </tr>
        </thead>
        <tbody>{renderMain(props.mine)}</tbody>
      </Table>
    </div>
  );
}

export default Mine;
