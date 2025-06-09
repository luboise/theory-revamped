// 5 and 11 are unused
// 0-4  = SPB-SPL

// 6-10 = DPB-DPL
export type ChartDiff = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10;

export function isChartDiff(data: any): data is ChartDiff {
	return typeof data === "number" && [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].includes(data);
}

export type PlayMode = "SP" | "DP";

export interface SongData {
	songId: number;
	gameVersion: number;
	title: string;
	titleAscii: string;
	genre: string;
	artist: string;
	chartIds: ChartDiff[];
}

export interface ChartData {
	chart_id: string;
	song_id: string;
	diff: ChartDiff;
	methods: Array<string>;
}

export interface SongFolder {
	style: number;
	title: string;
	songs: { [key: string]: SongData };
}

export type SongObjectsUploadPayload = Record<
	string,
	{
		song_id: string;
		game_version: number;
		title: string;
		title_ascii: string;
		genre: string;
		artist: string;
		chart_ids: number[];
	}
>;

type AttachmentEmbed = `||${string}|${string}||` | `||${string}|${string}|${string}||`;

interface MethodAttachmentBase {
	type: string;
	position: number;
}

export interface ImageAttachment extends MethodAttachmentBase {
	type: "image";
	url: string;
	width: number;
	height: number;
}

export interface GearShiftAttachment extends MethodAttachmentBase {
	type: "gearshift";
	amount: number;
}

export type MethodAttachment = ImageAttachment | GearShiftAttachment;
export function attachmentEmbedOf(attachment: MethodAttachment): AttachmentEmbed {
	switch (attachment.type) {
		case "gearshift": {
			return `||gs|${attachment.amount}||`;
		}
		case "image": {
			return `||image|temp||`;
		}
	}
}

export interface ChartMethod {
	title: string;

	authorId: number;
	authorName: string;

	rating: number;
	difficulty: ChartDiff;
	timestamp: Date;

	body: string;
	attachments: MethodAttachment[];
}
