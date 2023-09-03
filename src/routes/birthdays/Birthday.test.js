import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Birthday from "./Birthday.svelte";

describe("Birthday", () => {
        const example = {
                name: "Ares",
                dob: "1996-03-03",
        };
        it("displays the name Hercules", () => {
                render(Birthday, { ...example, name: "Hercules" });
                expect(screen.queryByText("Hercules")).toBeVisible();
        });
        it("displays the name Athena", () => {
                render(Birthday, { ...example, name: "Athena" });
                expect(screen.queryByText("Athena")).toBeVisible();
        });
        it("displays the date of birth", () => {
                render(Birthday, { ...example, dob: "1994-02-02" });
                expect(screen.queryByText("1994-02-02")).toBeVisible();
        });
});
