import { MainType } from "../quote.type";
import Table from "react-bootstrap/Table";

interface MainProps {
  main: any;
}

function Main(props: MainProps) {
  const renderMain = (main: any) => {
    return main?.map((el: any, key: number) => {
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
            <th style={{ fontWeight: "bold", textAlign: "center" }}>50 Life Lessons by 80 year old man</th>
          </tr>
        </thead>
        <tbody>{renderMain(props.main)}</tbody>
      </Table>
    </div>
  );
}

export default Main;
