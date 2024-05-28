import { Tooltip } from "../../components/tooltip/index.jsx";

export default {
  component: Tooltip,
  argTypes: {
    placement: {
      title: {
        control: { type: 'string' }
      },
      options: [
        "top",
        "left",
        "right",
        "bottom",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
        "leftTop",
        "leftBottom",
        "rightTop",
        "rightBottom",
      ],
      control: { type: "inline-radio" },
    },
    trigger: {
      options: ["hover", "click", "focus"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = {
  args: {
    trigger: "hover",
    placement: "top",
    title: "tooltip",
  },
  render: (args) => {
    return (
      <div style={{ margin: "100px" }}>
        <Tooltip {...args}>
          <div
            style={{
              border: "1px solid black",
              textAlign: "center",
              padding: "2px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Hover Me!
          </div>
        </Tooltip>
      </div>
    );
  },
};
