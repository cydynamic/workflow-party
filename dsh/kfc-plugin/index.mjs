import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const name = 'kfc-personal';
export const inject = ['profileContext', 'skills'];

export async function apply(ctx) {
  const requireHost = createRequire(ctx.profileContext.installAnchor);
  const entry = requireHost.resolve('@deepseek-ai/dsh-skill-filesystem');
  const filesystem = await import(pathToFileURL(entry).href);
  await ctx.plugin(filesystem, {
    providerName: 'kfc-personal',
    includeDefaultRoots: false,
    bundledSkillDir: fileURLToPath(new URL('./skills/', import.meta.url)),
    watch: false
  }).await();
}
