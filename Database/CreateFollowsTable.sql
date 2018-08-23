USE [MeMeats]
GO

/****** Object:  Table [dbo].[Follows]    Script Date: 8/8/2018 7:11:50 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Follows](
	[UserID] [bigint] NOT NULL,
	[FollowedID] [bigint] NOT NULL,
	[RelationID] [bigint] NULL
) ON [PRIMARY]
GO


