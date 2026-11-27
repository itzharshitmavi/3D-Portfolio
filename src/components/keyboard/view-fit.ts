/** Keep the larger, more front-facing skills pose within the viewport.
 * The board has a nearly square footprint; yaw aligns its long edge with the camera.
 * A width-based cap prevents portrait layouts from cropping outer columns.
 */
export function skillsBoardScale(width: number, height: number): number {
  const aspect = Math.max(1, width) / Math.max(1, height);
  const heightCap = height >= 700 ? 1.55 : height >= 550 ? 1.42 : 1.25;
  return Math.min(heightCap, aspect * 1.32);
}

/** Cancel the existing reference yaw, then rotate the board toward the camera. */
export function skillsBoardYaw(mobile: boolean): number {
  return (mobile ? Math.PI / 6 : Math.PI / 12) - Math.PI / 4;
}

/** Bound the total reveal stagger while preserving the original short-board rhythm. */
export function revealStagger(keyCount: number): number {
  return Math.min(0.07, 2.0 / Math.max(1, keyCount - 1));
}
