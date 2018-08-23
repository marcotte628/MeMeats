USE [MeMeats]
GO

/****** Object:  Table [dbo].[Accounts]    Script Date: 8/8/2018 7:09:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Accounts](
	[UserID] [bigint] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Phone] [varchar](10) NULL,
	[Street] [varchar](max) NULL,
	[Town] [varchar](50) NULL,
	[State] [varchar](2) NULL,
	[Zipcode] [int] NULL,
	[NumReviews] [bigint] NULL,
	[NumPoints] [bigint] NULL,
	[Type] [bit] NOT NULL,
	[Image] [varbinary](max) NULL,
	[Name] [varchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

/****** Object:  Index [IX_Accounts]    Script Date: 8/8/2018 7:09:48 PM ******/
CREATE NONCLUSTERED INDEX [IX_Accounts] ON [dbo].[Accounts]
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


