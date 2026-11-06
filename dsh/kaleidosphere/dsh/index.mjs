import { fileURLToPath } from 'node:url';
import * as skillFilesystem from '@deepseek-ai/dsh-skill-filesystem';

export const name = 'kaleidosphere';
export const inject = ['skills'];

// 只注册随包技能，避免重复发现宿主已有的用户和项目技能。
export function apply(ctx) {
  ctx.plugin(skillFilesystem, {
    providerName: 'kaleidosphere',
    includeDefaultRoots: false,
    bundledSkillDir: fileURLToPath(new URL('../skills/', import.meta.url)),
    watch: false
  });
}
