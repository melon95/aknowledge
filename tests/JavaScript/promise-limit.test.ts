import { limitConcurrency } from "../../code/JavaScript/promise-limit";

describe("limitConcurrency", () => {
  it("should resolve with the correct results", async () => {
    const task1 = () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 100));
    const task2 = () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 100));
    const task3 = () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 100));
    const task4 = () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 100));

    const tasks = [task1, task2, task3, task4];

    const results = await limitConcurrency(tasks, 2);

    expect(results).toEqual(["Task 1", "Task 2", "Task 3", "Task 4"]);
  });

  it("should resolve with the correct results when maxConcurrency is 1", async () => {
    const task1 = () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 100));
    const task2 = () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 100));
    const task3 = () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 100));
    const task4 = () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 100));

    const tasks = [task1, task2, task3, task4];

    const results = await limitConcurrency(tasks, 1);

    expect(results).toEqual(["Task 1", "Task 2", "Task 3", "Task 4"]);
  });

  it("should resolve with the correct results when maxConcurrency is greater than the number of tasks", async () => {
    const task1 = () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 100));
    const task2 = () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 100));
    const task3 = () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 100));
    const task4 = () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 100));

    const tasks = [task1, task2, task3, task4];

    const results = await limitConcurrency(tasks, 10);

    expect(results).toEqual(["Task 1", "Task 2", "Task 3", "Task 4"]);
  });

  it("should retry failed tasks up to the specified number of times", async () => {
    const task1 = jest.fn(() => Promise.reject("Task 1 failed"));
    const task2 = jest.fn(() => Promise.reject("Task 2 failed"));
    const task3 = jest.fn(() => Promise.resolve("Task 3"));
    const task4 = jest.fn(() => Promise.resolve("Task 4"));

    const tasks = [task1, task2, task3, task4];

    const results = await limitConcurrency(tasks, 2, 1);

    expect(task1).toHaveBeenCalledTimes(2);
    expect(task2).toHaveBeenCalledTimes(2);
    expect(task3).toHaveBeenCalledTimes(1);
    expect(task4).toHaveBeenCalledTimes(1);
    expect(results).toEqual(["Task 1 failed", "Task 2 failed", "Task 3", "Task 4"]);
  });

  it("should not retry tasks that succeed", async () => {
    const task1 = jest.fn(() => Promise.resolve("Task 1"));
    const task2 = jest.fn(() => Promise.resolve("Task 2"));
    const task3 = jest.fn(() => Promise.resolve("Task 3"));
    const task4 = jest.fn(() => Promise.resolve("Task 4"));

    const tasks = [task1, task2, task3, task4];

    const results = await limitConcurrency(tasks, 2, 1);

    expect(task1).toHaveBeenCalledTimes(1);
    expect(task2).toHaveBeenCalledTimes(1);
    expect(task3).toHaveBeenCalledTimes(1);
    expect(task4).toHaveBeenCalledTimes(1);
    expect(results).toEqual(["Task 1", "Task 2", "Task 3", "Task 4"]);
  });

  it("should not retry tasks that fail and exceed the maximum number of retries", async () => {
    const task1 = jest.fn(() => Promise.reject("Task 1 failed"));
    const task2 = jest.fn(() => Promise.reject("Task 2 failed"));
    const task3 = jest.fn(() => Promise.resolve("Task 3"));
    const task4 = jest.fn(() => Promise.resolve("Task 4"));

    const tasks = [task1, task2, task3, task4];

    const results = await limitConcurrency(tasks, 2, 0);

    expect(task1).toHaveBeenCalledTimes(1);
    expect(task2).toHaveBeenCalledTimes(1);
    expect(task3).toHaveBeenCalledTimes(1);
    expect(task4).toHaveBeenCalledTimes(1);
    expect(results).toEqual(["Task 1 failed", "Task 2 failed", "Task 3", "Task 4"]);
  });
});
