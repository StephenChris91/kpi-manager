import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//styles
import "./Dashboard.scss";

const Dashboard = () => {
  const kpiBoard = [
    {
      id: 1,
      deptName: "Sales",
      teamTotal: 10,
      teamTarget: 20,
      teamAchievement: "20%",
    },
    {
      id: 2,
      deptName: "Recruitment",
      teamTotal: 10,
      teamTarget: 20,
      teamAchievement: "20%",
    },
    {
      id: 3,
      deptName: "Media",
      teamTotal: 10,
      teamTarget: 20,
      teamAchievement: "20%",
    },
    {
      id: 4,
      deptName: "I.T Support",
      teamTotal: 10,
      teamTarget: 20,
      teamAchievement: "20%",
    },
    {
      id: 5,
      deptName: "Project Management",
      teamTotal: 10,
      teamTarget: 20,
      teamAchievement: "20%",
    },
  ];
  return (
    <Container fluid>
      <h1 className="text-center mt-4">Dashboard</h1>
      <Container className="kpi-boards-container">
        {kpiBoard.map((kpi) => {
          return (
            <Link to={`/kpi/${kpi.id}`}>
              <Container className="kpi-boards">
                <Row>
                  <Col>
                    <h3 className="team-name">{kpi.deptName}</h3>
                    <p className="team-total">Total KPI: {kpi.teamTotal}</p>
                    <p className="team-target">
                      Monthly Target {kpi.teamTarget}
                    </p>
                  </Col>
                  <Col>
                    <p className="team-achievement">{kpi.teamAchievement}</p>
                    <p>Achievements</p>
                  </Col>
                </Row>
              </Container>
            </Link>
          );
        })}
      </Container>
    </Container>
  );
};

export default Dashboard;
