import { trackComponentLifecycle } from "telex-tracker";

const MyComponent = () => <Text>Hello</Text>;
export default trackComponentLifecycle(MyComponent, "MyComponent");
