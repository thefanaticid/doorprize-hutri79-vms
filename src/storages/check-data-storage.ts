import { InforDataType } from "@/features/check-feature"
import { atom } from "jotai"

export const DATA_INFORMATION = atom<InforDataType | null>(null)