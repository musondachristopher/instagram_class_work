export default function Student(props) {
        return (
            <li className="student">
            <div className="info">
                <h1>Full Name:  {props.name}</h1>
                <li>Email: {props.email}</li>
                <li>Id: {props.id}</li>
                <li>Major: {props.major}</li>
    
            </div>
         
          </li>
        );
      }
    