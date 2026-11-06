import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

export const name = 'kaleidosphere-subagent';
export const inject = ['profileContext'];

export async function apply(ctx) {
  // 从宿主安装目录解析官方组件，避免被 profile 中其他插件的旧依赖遮蔽。
  const resolveFromHost = createRequire(ctx.profileContext.installAnchor).resolve;
  const entry = resolveFromHost('@deepseek-ai/dsh-tool-subagent');
  const tool = await import(pathToFileURL(entry).href);
  await ctx.plugin(tool, { provider: 'spawn', toolName: 'ks_subagent' }).await();
}
