
import { useNavigate } from "react-router-dom";

export default function Card(props: any) {
  const navigate = useNavigate();
  const { title, imagePath, link } = props;
  return (
    <div className="card" onClick={() => navigate(link)}>
      <h2 className="cardTitle">
        { title }
      </h2>
      <img src={imagePath} className="imageContent" />
    </div>
  );
}
