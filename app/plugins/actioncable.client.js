import ActionCable from "actioncable";

export default defineNuxtPlugin(() => {
  // Get JWT token from localStorage
  const token = useCookie("authToken").value;

  // Create Action Cable consumer
  const cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${token}`);

  return {
    provide: { cable }
  };
});
