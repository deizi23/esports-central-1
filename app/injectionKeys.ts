import type { InjectionKey } from 'vue'
import type { TeamDisplaySettings } from '~/types/teamDisplaySettings'
export const TeamDisplaySettingsKey =
  Symbol() as InjectionKey<TeamDisplaySettings>