import { strict as assert } from "node:assert";
import { test } from "node:test";
import { revealStagger, skillsBoardScale, skillsBoardYaw } from "./view-fit";

test("skills pose grows on normal desktops and portrait phones", () => {
  for (const [w, h] of [[1920,1080],[1366,768],[1024,768],[390,844],[360,640],[844,390]]) {
    const old = Math.min(1, w / h * 1.05) * (w < 768 ? 0.88 : 1.05);
    assert.ok(skillsBoardScale(w,h) > old, `${w}×${h}`);
    assert.ok(skillsBoardScale(w,h) <= 1.55);
    assert.ok(skillsBoardScale(w,h) <= w / h * 1.32);
  }
});
test("skills yaw aligns with the camera across breakpoints", () => {
  for (const mobile of [true,false]) {
    const reference = mobile ? -Math.PI / 6 : -Math.PI / 12;
    assert.ok(Math.abs(reference + skillsBoardYaw(mobile) + Math.PI / 4) < 1e-9);
  }
});
test("67 keys reveal within a bounded two-second stagger", () => {
  assert.equal(revealStagger(24), 0.07);
  assert.ok(66 * revealStagger(67) <= 2);
  assert.ok(95 * revealStagger(96) <= 2);
});
