// reference: https://deno.land/manual@v1.15.3/testing
// cmd win: deno test .\10_testing.ts
// cmd unixoid: deno test 10_testing.ts

// for generating a coverage report
// 1. deno test --coverage=cov_profile 10_testing.ts
// 2. deno coverage cov_profile

import {
  assert,
  assertStrictEquals,
  assertArrayIncludes,
  assertMatch,
  AssertionError,
  assertExists,
  assertNotEquals,
} from "https://deno.land/std@0.113.0/testing/asserts.ts";

Deno.test("Basic testing with Deno", () => {
  assert("Hello, world");

  const x: number = someArbitraryFunction();
  assertExists(x);
  assertNotEquals(x, "43");
  assertStrictEquals(x, 42);

  const y: number[] = greatFunction();
  assertArrayIncludes(y, [8]);

  const str: string = "abcdefghi";
  assertMatch(str, new RegExp("def"));

  assertPowerOf(8, 2);
});

function someArbitraryFunction(): number {
  return 42;
}

function greatFunction(): number[] {
  return [12, 11, 10, 9, 8];
}

function assertPowerOf(actual: number, expected: number, msg?: string): void {
  let received: number = actual;
  while (received % expected === 0) received = received / expected;
  if (received !== 1) {
    if (!msg) {
      msg = `actual: "${actual}" expected to be a power of : "${expected}"`;
    }
    throw new AssertionError(msg);
  }
}
