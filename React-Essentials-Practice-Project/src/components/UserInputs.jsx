import Input from "./Input.jsx";

export default function UserInputs({ initialValues, onSetValues }) {
  var inputGroups = [];
  for (var i = 0; i < 2; i++) {
    inputGroups.push(
      <div className="input-group">
        {Object.entries(initialValues)
          .slice(i * 2, i * 2 + 2)
          .map(([key, value]) => (
            <Input
              key={key}
              labelKey={key}
              value={value || ""}
              onChange={(ev) =>
                onSetValues((prevValues) => {
                  return {
                    ...prevValues,
                    [key]: +ev.target.value,
                  };
                })
              }
            />
          ))}
      </div>
    );
  }
  return <div id="user-input">{...inputGroups}</div>;
}
