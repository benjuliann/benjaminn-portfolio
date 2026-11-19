import { config, fields, collection } from "@keystatic/core";

// Local files while developing; in production, edits are committed to GitHub by whoever logs in.
// Only GitHub accounts with write access to the repo can save.
export default config({
    storage: process.env.NODE_ENV === "production"
        ? { kind: "github", repo: "benjuliann/benjaminn-portfolio" }
        : { kind: "local" },
    collections: {
        projects: collection({
            label: "Projects",
            slugField: "title",
            path: "content/projects/*",
            schema: {
                title: fields.slug({ name: { label: "Title" } }),
                description: fields.text({ label: "Description", multiline: true }),
                category: fields.select({
                    label: "Type",
                    options: [
                        { label: "Software", value: "Software" },
                        { label: "Music", value: "Music" },
                        { label: "Design", value: "Design" },
                    ],
                    defaultValue: "Software",
                }),
                tech: fields.array(fields.text({ label: "Tool" }), {
                    label: "Stack",
                    itemLabel: (props) => props.value,
                }),
                image: fields.image({
                    label: "Image",
                    directory: "public/images/projects",
                    publicPath: "/images/projects/",
                    validation: { isRequired: true },
                }),
                projectLink: fields.url({ label: "Link", validation: { isRequired: true } }),
                position: fields.integer({
                    label: "Position",
                    description: "Order on the site, lowest first.",
                    defaultValue: 99,
                }),
            },
        }),
    },
});
