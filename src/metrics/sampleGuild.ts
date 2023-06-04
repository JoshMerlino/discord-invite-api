import { client } from ".";

export default async function sampleGuild(id: string): Promise<Store> {

	const guild = await client.guilds.fetch(id);

	const { name, verified, memberCount, ownerId } = guild;
	const owner = await guild.fetchOwner();
	const inviteCodes = await guild.invites.fetch()
		.then(invite => invite.map(i => i.code));

	return {
		id: guild.id,
		name,
		owner: owner.user.tag,
		ownerId,
		verified,
		memberCount,
		memberOnline: guild.members.cache.filter(member => [ "online", "dnd", "away" ].includes(member.presence?.status + "")).size,
		bannerURL: guild.bannerURL({ size: 2048 }),
		iconURL: guild.iconURL({ size: 2048 }),
		inviteCodes
	};

}
